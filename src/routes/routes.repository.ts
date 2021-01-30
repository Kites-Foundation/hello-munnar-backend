import { EntityRepository, Repository } from 'typeorm';
import { Route } from './entities/route.entity';
import { CreateRouteDto } from './dto/create-route.dto';

@EntityRepository(Route)
export class routeRepository extends Repository<Route> {
  async createRoute(createroutedto: CreateRouteDto): Promise<any> {
    const {
      routeName,
      description,
      imageUrl,
      source,
      review,
      destination,
      totalDistance,
    } = createroutedto;

    const route = new Route();
    route.description = description;
    route.destination = destination;
    route.routeName = routeName;
    route.imageUrl = imageUrl;
    route.source = source;
    route.review = review;
    route.totalDistance = totalDistance;
    try {
      await route.save();
      return route;
    } catch (err) {
      return err;
    }
  }
}
