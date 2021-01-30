import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { AuthCommand } from '../../auth/cqrs';
import { RolesService } from '../roles.service';

@CommandHandler(AuthCommand)
export class AuthCommandHandler implements ICommandHandler<AuthCommand> {
  constructor(private readonly roleService: RolesService) {}

  async execute(command: AuthCommand) {
    const { user, type } = command;
    const role = await this.roleService.getRoleByName(
      'SuperAdmin',
      'admin',
      user,
    );
    return this.roleService.createUserRole(user, role, 'admin', user);
  }
}
