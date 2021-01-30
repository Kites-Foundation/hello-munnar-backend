import { EntityRepository, Repository } from 'typeorm';
import { Facility } from './entities/facility.entity';
import { CreateTypeDto } from './dto/create-type.dto';
import { Type } from './entities/type.entity';
import {
  HttpException,
  HttpStatus,
  InternalServerErrorException,
} from '@nestjs/common';
@EntityRepository(Facility)
export class FacilityRepository extends Repository<Facility> {
  async createType(createTypeDto: CreateTypeDto) {
    const { name } = createTypeDto;
    const nameIfExist = await this.findOne({ name: name });
    if (nameIfExist) {
      return new HttpException(
        { detail: 'Type already exist' },
        HttpStatus.CONFLICT,
      );
    }
    const type = new Type();
    type.name = name;
    try {
      await type.save();
    } catch (error) {
      throw new InternalServerErrorException();
    }
    return type;
  }
}
