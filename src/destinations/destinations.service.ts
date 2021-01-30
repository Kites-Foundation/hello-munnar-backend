import { Injectable } from '@nestjs/common';
import { AddDestinationDto } from './dto/addDestination.dto';
import { v4 as uuidv4 } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DestinationsService {

    constructor(
        @InjectRepository(AddDestinationDto)
        private adddestinationsDto: AddDestinationDto,
      ) {}
   async addDestinations(AddDestinationsDto:AddDestinationDto): Promise<any>{
    return this.facilityRepository.createFacility(createFacilityDto);
   }

  
}
