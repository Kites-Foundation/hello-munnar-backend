import { Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { routeRepository } from './routes.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RoutesService {
  constructor(
    @InjectRepository(routeRepository)
    private readonly RouteRepository: routeRepository,
  ) {}

  createRoute(createRouteDto: CreateRouteDto): Promise<any> {
    return this.RouteRepository.createRoute(createRouteDto);
  }
}
