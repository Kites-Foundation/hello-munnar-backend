import { Injectable} from '@nestjs/common';
import { AddDestinationDto } from './dto/addDestination.dto';
import {InjectRepository} from '@nestjs/typeorm';
import {DestinationRepository} from 'src/destinations/destination.repository'

@Injectable()
export class DestinationsService {
    constructor(  
    @InjectRepository(DestinationRepository)
    private DestinationRepository : DestinationRepository){}

    async addDestination(AddDestinationDto:AddDestinationDto):Promise <any>{
        console.log("log:",AddDestinationDto)
        return this.DestinationRepository.addDestination(AddDestinationDto);
    }
}
