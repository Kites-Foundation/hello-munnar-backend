import { EntityRepository, getConnection, Repository } from 'typeorm';
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
    const nameIfExist = await getConnection()
      .createQueryBuilder()
      .select('type')
      .from(Type, 'type')
      .where('type.name = :exist', { exist: name })
      .getOne();
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

  async findAllTypes(): Promise<Type[]> {
    const types = await getConnection()
      .createQueryBuilder()
      .select('type')
      .from(Type, 'type')
      .getMany();
    return types;
  }

  async findTypeById(id: number): Promise<Type> {
    const type = await getConnection()
      .createQueryBuilder()
      .select('type')
      .from(Type, 'type')
      .where('type.id = :id', { id: id })
      .getOne();
    return type;
  }

  async updateType(id: number, updateType: CreateTypeDto): Promise<any> {
    const { name } = updateType;

    const type = await getConnection()
      .createQueryBuilder()
      .select('type')
      .from(Type, 'type')
      .where('type.id = :id', { id: id })
      .getOne();

    if (type) {
      type.name = name;
      await type.save();
      return type;
    } else {
      return 'item not found';
    }
  }
}
