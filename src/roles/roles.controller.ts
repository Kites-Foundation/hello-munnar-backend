import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  Request,
} from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto, CreateRoleUserDto } from './dto';
import { RoleUsers } from './entities';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Roles Management')
@Controller('/api/v1/roles')
export class RolesController {
  private logger = new Logger('RolesController');

  constructor(private readonly rolesService: RolesService) {}

  @Post('create-role')
  async createRole(
    @Request() req: any,
    @Body() createRoleDto: CreateRoleDto,
  ): Promise<any> {
    await this.rolesService.checkRole(req.user.id, 'admin', 0);
    const user = req.user;
    return this.rolesService.createRole(createRoleDto, user);
  }

  @Post('create-role-user')
  async createRoleUser(
    @Request() req: any,
    @Body() createRoleUserDto: CreateRoleUserDto,
  ): Promise<RoleUsers> {
    const user = req.user;
    await this.rolesService.checkRole(req.user.id, 'admin', 0);
    return this.rolesService.addUserToRole(createRoleUserDto, user);
  }

  @Delete('delete-role-user/:RoleUserId')
  async removeRoleUser(
    @Request() req: any,
    @Param('RoleUserId') roleUserId: number,
  ): Promise<any> {
    const user = req.user;
    await this.rolesService.checkRole(req.user.id, 'admin', 0);
    return this.rolesService.removeRoleUser(roleUserId, user);
  }

  @Get('current-user-roles')
  getCurrentUserRoles(@Request() req): Promise<any> {
    this.logger.verbose(`current User Roles Queried`);
    return this.rolesService.getCurrentUserRoles(req);
  }

  @Get('get-role-users')
  async getUsersWithRoles(@Request() req): Promise<any> {
    const adminRole = await this.rolesService.getRoleByName(
      'XylemAdmin',
      'admin',
      req.user,
    );
    return {
      success: true,
      data: await this.rolesService.getRoleUserByRoleRefId(0, adminRole.id),
    };
  }

  @Post('update-user-role')
  async updateUserRole(@Request() req, @Body() body: any): Promise<any> {
    await this.rolesService.checkRole(req.user.id, 'admin', 0);
    this.logger.verbose(`current User Roles Queried`);
    const adminRole = await this.rolesService.getRoleByName(
      'XylemAdmin',
      'admin',
      req.user,
    );
    if (body.type === 'remove') {
      const list = await this.rolesService.getRoleUserByRoleRefId(
        0,
        adminRole.id,
      );
      // console.log(list);
      if (list.length === 1) {
        return {
          success: false,
          message: 'We need atleast one Admin in the system',
        };
      }
      return this.rolesService.removeRoleUserWithId(
        parseInt(`${adminRole.id}`),
        body.userId,
      );
    }
    return this.rolesService.addUserToRole(
      {
        userId: body.userId,
        roleId: parseInt(`${adminRole.id}`),
        type: 'admin',
        refId: 0,
        createdBy: req.user.id,
      },
      req.user,
    );
  }
}
