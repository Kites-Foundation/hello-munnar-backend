import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AddDestinationDto } from './dto/addDestination.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DestinationRepository } from 'src/destinations/destination.repository';

@Injectable()
export class DestinationsService {
  [x: string]: any;
  constructor(
    @InjectRepository(DestinationRepository)
    private destinationRepository: DestinationRepository,
  ) {}

  async addDestination(AddDestinationDto: AddDestinationDto): Promise<any> {
    console.log('log:', AddDestinationDto);
    return this.DestinationRepository.addDestination(AddDestinationDto);
  }

  updateDestination(id: number, updateDestinationDto: AddDestinationDto) {}
}
