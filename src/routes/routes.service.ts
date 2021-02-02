import { Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { RouteRepository } from './routes.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateStatusDto } from './dto/update-status.dto';
import { Route } from './entities/route.entity';

@Injectable()
export class RoutesService {
  constructor(
    @InjectRepository(RouteRepository)
    private readonly routeRepository: RouteRepository,
  ) {}

  createRoute(createRouteDto: CreateRouteDto): Promise<any> {
    return this.routeRepository.createRoute(createRouteDto);
  }

  async findAllRoutes(): Promise<Route[]> {
    const types = await this.routeRepository.findAllRoutes();
    return types;
  }

  async updateStatus(id: number, status: UpdateStatusDto) {
    return this.routeRepository.updateStatus(id, status);
  }
}
