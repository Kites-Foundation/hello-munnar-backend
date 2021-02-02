import { EntityRepository, Repository,getConnection } from 'typeorm';
import {Destination} from './entities/destination.entity';
import {AddDestinationDto } from './dto/addDestination.dto';
import { v4 as uuidv4 } from 'uuid';
import {
  InternalServerErrorException,
} from '@nestjs/common';
@EntityRepository(Destination)
export class DestinationRepository extends Repository<Destination> {
  async addDestination(AddDestinationDto:AddDestinationDto) {
    const { name,latitude,longitude,description,type,route,image_url,current_temperature,best_time,best_month,tags,status,reviews,activities } = AddDestinationDto;
    const destination=new Destination()
    destination.name=name
    destination.latitude=latitude
    destination.longitude=longitude
    destination.description=description
    destination.type=type
    destination.route=route
    destination.image_url=image_url
    destination.current_temperature=current_temperature
    destination.best_time=best_time
    destination.best_month=best_month
    destination.tags=tags
    destination.status=status
    destination.reviews=reviews
    destination.activities=activities
    destination.id== uuidv4(); 
    try {
      await destination.save();
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async updateDestination(
    destinationID: number,
    updateDestination: AddDestinationDto,
  ) {
    const {
      name,latitude,longitude,description,type,route,image_url,current_temperature,best_time,best_month,tags,status,reviews,activities
    } = updateDestination;

    const destination= await getConnection()
      .createQueryBuilder()
      .select('destination')
      .from(Destination, 'destination')
      .where('destination.id = :id', { id: destinationID })
      .getOne();
    if (destination) {
    destination.name=name
    destination.latitude=latitude
    destination.longitude=longitude
    destination.description=description
    destination.type=type
    destination.route=route
    destination.image_url=image_url
    destination.current_temperature=current_temperature
    destination.best_time=best_time
    destination.best_month=best_month
    destination.tags=tags
    destination.status=status
    destination.reviews=reviews
    destination.activities=activities

      try {
        await destination.save();
      } catch (error) {
        throw new InternalServerErrorException();
      }
      return destination;
    } else {
      return 'invalid destination ID';
    }
  } 
}
