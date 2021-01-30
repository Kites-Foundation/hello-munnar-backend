import { EntityRepository, Repository } from 'typeorm';
import { Route } from './entities/route.entity';
import { CreateRouteDto } from './dto/create-route.dto';
import { InternalServerErrorException } from '@nestjs/common';

@EntityRepository(Route)
export class routeRepository extends Repository<Route> {
  async createRoute(createroutedto: CreateRouteDto): Promise<any> {
    const {
      routeName,
      description,
      imageUrl,
      source,
      rating,
      destination,
      totalDistance,
      status,
    } = createroutedto;

    const route = new Route();
    route.description = description;
    route.destination = destination;
    route.routeName = routeName;
    route.imageUrl = imageUrl;
    route.source = source;
    route.rating = rating;
    route.status = status;
    route.totalDistance = totalDistance;
    try {
      await route.save();
    } catch (err) {
      throw new InternalServerErrorException();
    }
    return route;
  }
}
