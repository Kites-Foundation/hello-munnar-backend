import { Controller } from '@nestjs/common';
import { RolesService } from './roles.service';

@Controller('/api/v1/roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}
}
