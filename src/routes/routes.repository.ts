import { EntityRepository, getConnection, Repository } from 'typeorm';
import { Route } from './entities/route.entity';
import { CreateRouteDto } from './dto/create-route.dto';
import { InternalServerErrorException } from '@nestjs/common';
import { UpdateStatusDto } from './dto/update-status.dto';

@EntityRepository(Route)
export class RouteRepository extends Repository<Route> {
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

  async findAllRoutes(): Promise<Route[]> {
    const routes = await getConnection()
      .createQueryBuilder()
      .select('route')
      .from(Route, 'route')
      .getMany();
    return routes;
  }

  async updateStatus (id:number,data:UpdateStatusDto):Promise<any> {
    const routeId=id;
    const {status}=data;
    const r = await getConnection()
     .createQueryBuilder()
     .select('route')
     .from(Route, 'route')
     .where('route.routeId = :id', { id: routeId })
    .getOne();

    if(r){
      r.status=status
      try{
        await r.save()
      }catch(err){
        return err
      }
    }else{
      return "invalid routeid"
    }
    return r;
  }
}
