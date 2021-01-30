import { Controller, Body, Post, Patch, Get } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateStatusDto } from './dto/update-status.dto';
import { Param } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common';

@ApiTags('Routes Management')
@Controller('/api/v1/routes')
export class RoutesController {
  constructor(private readonly routesService: RoutesService) {}
  @Post('create')
  createRoute(@Body() createRouteDto: CreateRouteDto): Promise<any> {
    return this.routesService.createRoute(createRouteDto);
  }

  @Get('')
  findAllTypes() {
    return this.routesService.findAllRoutes();
  }

  @Patch('updateStatus/:id')
  updateStatus(
    @Body() status: UpdateStatusDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.routesService.updateStatus(id, status);
  }
}
