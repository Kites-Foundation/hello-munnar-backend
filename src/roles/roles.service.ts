import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserRepository } from '../auth/user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleUserRepository } from './roleUser.repository';
import { Roles } from './entities';
import { CommandBus } from '@nestjs/cqrs';
import { Users } from '../auth/entities';
import { RoleCommand } from './cqrs/role.command';

@Injectable()
export class RolesService {
  private logger = new Logger('Roles Service');
  constructor(
    @InjectRepository(Roles)
    private readonly roleRepository: Repository<Roles>,
    @InjectRepository(RoleUserRepository)
    private roleUserRepository: RoleUserRepository,
    private userRepository: UserRepository,
    private readonly commandBus: CommandBus,
  ) {}

  async createRole(role: any, user: Users): Promise<any> {
    try {
      return await this.roleRepository.save(role);
    } catch (err) {
      global.console.log('err', err);
      return {
        success: false,
        message: 'Something went wrong..! Failed to create role.',
      };
    }
  }

  async getRoleByName(name: string, type: string, user: any): Promise<Roles> {
    try {
      let role = await this.roleRepository.findOne({
        name,
        type,
      });
      if (!role) {
        const roleData = {
          name,
          description: 'default',
          type,
          createdBy: user.id,
        };
        role = await this.createRole(roleData, user);
      }
      return role;
    } catch (ex) {
      global.console.log('Error', ex);
    }
  }

  async getRoleUserByRoleRefId(refId: number, roleId: number): Promise<any> {
    try {
      return await this.roleUserRepository.find({ roleId, refId });
    } catch (err) {
      global.console.log('err', err);
      return {
        success: false,
        message: 'Something went wrong..! Failed to find role users.',
      };
    }
  }

  async getRoleUserbyRefId(refId: number, type: string): Promise<any> {
    try {
      const qry = this.roleUserRepository
        .createQueryBuilder('roleUsers')
        .innerJoinAndSelect('roleUsers.user', 'users')
        .where('roleUsers.type = :type', { type })
        .andWhere('roleUsers.refId = :refId', { refId });
      const roleUserList = await qry.getMany();
      return roleUserList.map((item) => item.user);
    } catch (err) {
      global.console.log('err', err);
      return {
        success: false,
        message: 'Something went wrong..! Failed to find matching role users.',
      };
    }
  }

  async createUserRole(
    user: Users,
    role: Roles,
    type: string,
    createdBy: Users,
    refId = 0,
  ): Promise<any> {
    const userRole = await this.roleUserRepository.findOne({
      roleId: role.id,
      userId: user.id,
      type,
    });

    if (userRole) {
      return userRole;
    }
    return await this.roleUserRepository.save({
      roleId: role.id,
      userId: user.id,
      refId,
      type,
      createdBy: createdBy.id,
    });
  }

  async addUserToRole(roleuser: any, user: Users): Promise<any> {
    try {
      const userRole = await this.roleUserRepository.findOne(roleuser);
      if (userRole) {
        return {
          success: false,
          message: 'User already exists!!!',
        };
      } else {
        const result = await this.roleUserRepository.save(roleuser);

        if (result) {
          const project = await this.commandBus.execute(
            new RoleCommand(roleuser.refId),
          );
          //const project = await this.projectRepository.findOne({ id: roleuser.refId });
          if (project) {
            roleuser.projectName = project.name;
          }

          const role = await this.roleRepository.findOne({
            id: roleuser.roleId,
            type: roleuser.type,
          });

          if (role) {
            roleuser.roleName = role.name;
          }
        }

        return {
          success: true,
          message: 'Success',
          data: result,
        };
      }
    } catch (err) {
      global.console.log('err', err);
      return {
        success: false,
        message: 'Something went wrong..! Failed to add user role.',
      };
    }
  }

  async removeRoleUserWithId(roleId: number, userId: number): Promise<any> {
    const result = await this.roleUserRepository.delete({
      roleId,
      userId,
    });
    return {
      success: true,
      message: 'Success',
      data: result,
    };
  }

  async removeRoleUser(id, user): Promise<any> {
    const result = await this.roleUserRepository.delete({ id });
    return {
      success: true,
      message: 'Success',
      data: result,
    };
  }

  async handleRoleUsers(
    refId: number,
    users: any,
    typeIn: any,
    user: any,
  ): Promise<any> {
    try {
      const roleName = typeIn == 'admin' ? 'super_admin' : 'local_admin';
      const type = 'user';
      const role = await this.getRoleByName(roleName, type, user);

      const currentRoleUsers = await this.getRoleUserByRoleRefId(
        refId,
        role.id,
      );
      if (currentRoleUsers && currentRoleUsers.length > 0) {
        for (let idx = 0; idx < currentRoleUsers.length; idx++) {
          await this.removeRoleUser(currentRoleUsers[idx].id, user);
        }
      }
      if (users && users.length > 0) {
        for (let idx = 0; idx < users.length; idx++) {
          const userId = parseInt(users[idx].value);
          const roleUserData = {
            userId,
            refId,
            roleId: role.id,
            type,
            createdBy: user.id,
          };
          await this.addUserToRole(roleUserData, user);
        }
      }

      return {
        success: true,
        message: 'Role Users added successfully.',
      };
    } catch (err) {
      global.console.log('err', err);
      return {
        success: false,
        message: 'Something went wrong..! Failed to add user role.',
      };
    }
  }

  async getCurrentUserRoles(req: any): Promise<any> {
    const { user } = req;
    const result = await this.roleUserRepository.find({
      relations: ['roles'],
      where: { userId: user.id },
    });
    return {
      success: true,
      message: 'Success',
      data: result,
    };
  }

  async checkRole(userId: number, level: any, refId: number): Promise<boolean> {
    const result = await this.roleUserRepository.find({
      relations: ['roles'],
      where: { userId },
    });

    if (!result && result.length === 0) {
      throw new UnauthorizedException(
        'User Not Authorized to Perform this Action',
      );
    }
    const isAdmin = result.some((item: any) => item.type === 'admin');
    if (isAdmin) {
      return true;
    }
    const hasRole = result.some(
      (item: any) => item.refId == refId && item.roles.name === 'super_admin',
    );
    if (hasRole) {
      return true;
    }
    throw new UnauthorizedException(
      'User Not Authorized to Perform this Action',
    );
  }
}
