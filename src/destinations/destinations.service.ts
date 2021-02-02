import { Injectable } from '@nestjs/common';
import { AddDestinationDto } from './dto/addDestination.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DestinationRepository } from 'src/destinations/destination.repository';

@Injectable()
export class DestinationsService {
  constructor(
    @InjectRepository(DestinationRepository)
    private destinationRepository : DestinationRepository){}

    async addDestination(AddDestinationDto:AddDestinationDto):Promise <any>{
        return this.destinationRepository.addDestination(AddDestinationDto);
    }

    async updateDestination(id: number, updateDestinationDto: AddDestinationDto) 
    {
      return this.destinationRepository.updateDestination(id,updateDestinationDto);
    }

}
