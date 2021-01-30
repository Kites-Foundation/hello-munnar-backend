import { Controller } from '@nestjs/common';
import { RoutesService } from './routes.service';

@Controller('/api/v1/routes')
export class RoutesController {
  constructor(private readonly routesService: RoutesService) {}
}
