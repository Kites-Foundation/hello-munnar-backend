import { EntityRepository, Repository } from 'typeorm';

import {
  HttpException,
  HttpStatus,
  InternalServerErrorException,
} from '@nestjs/common';
@EntityRepository(Destination)
export class DestinationRepository extends Repository<Facility> {
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
