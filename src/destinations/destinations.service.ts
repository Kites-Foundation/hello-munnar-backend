import { Injectable} from '@nestjs/common';
import { AddDestinationDto } from './dto/addDestination.dto';
import {InjectRepository} from '@nestjs/typeorm';
import {DestinationRepository} from 'src/destinations/destination.repository'


@Injectable()
export class DestinationsService {
    [x: string]: any;
    constructor(  
    @InjectRepository(DestinationRepository)
    private destinationRepository : DestinationRepository){}

    async addDestination(addDestinationDto:AddDestinationDto):Promise <any>{
        return this.DestinationRepository.addDestination(addDestinationDto);
    }

    updateDestination(id: number, updateDestinationDto: AddDestinationDto) 
    {
      return this.destinationRepository.updateDestination(id,updateDestinationDto);
    }

    


   
}
