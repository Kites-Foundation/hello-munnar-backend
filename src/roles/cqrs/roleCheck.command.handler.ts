import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RoleCheckCommand } from '../../destinations/cqrs';
import { RolesService } from '../roles.service';

@CommandHandler(RoleCheckCommand)
export class RoleCheckCommandHandler
  implements ICommandHandler<RoleCheckCommand> {
  constructor(private readonly roleService: RolesService) {}

  async execute(command: RoleCheckCommand) {
    const { refId, userId, level } = command;
    return await this.roleService.checkRole(userId, level, refId);
  }
}
