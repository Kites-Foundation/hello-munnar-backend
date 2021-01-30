import { EntityRepository, getConnection, Repository } from 'typeorm';
import { Facility } from './entities/facility.entity';
import { CreateTypeDto } from './dto/create-type.dto';
import { Type } from './entities/type.entity';
import {
  HttpException,
  HttpStatus,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateFacilityDto } from './dto/create-facility.dto';
import { NotFoundException } from '@nestjs/common';
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
    if (type) return type;
    else throw new NotFoundException({ detail: 'No such type exists!!' });
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

  //create facility
  async createFacility(createFacilityDto: CreateFacilityDto) {
    const {
      typeId,
      name,
      address,
      pincode,
      description,
      latitude,
      longitude,
      contact,
      imageUrl,
      status,
    } = createFacilityDto;

    const type = await this.findTypeById(typeId);
    const facility = new Facility();
    facility.name = name;
    facility.address = address;
    facility.pincode = pincode;
    facility.description = description;
    facility.latitude = latitude;
    facility.longitude = longitude;
    facility.contact = contact;
    facility.imageUrl = imageUrl;
    facility.status = status;
    facility.type = type;
    try {
      await facility.save();
    } catch (error) {
      throw new InternalServerErrorException();
    }
    return facility;
  }

  async deleteType(id: number) {
    const result = await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Type)
      .where('id = :id', { id })
      .execute();
    if (result.affected === 0) {
      throw new NotFoundException(`Type with id "${id}" not found!!`);
    } else {
      return {
        sucess: true,
        message: 'Deleted Successfully',
      };
    }
  }
}
