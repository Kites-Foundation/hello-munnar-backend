import { Controller, Body, Post } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Routes Management')
@Controller('/api/v1/routes')
export class RoutesController {
  constructor(private readonly routesService: RoutesService) {}
  @Post('create')
  createRoute(@Body() createRouteDto: CreateRouteDto): Promise<any> {
    return this.routesService.createRoute(createRouteDto);
  }
}
