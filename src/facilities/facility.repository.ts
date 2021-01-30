import { EntityRepository, Repository } from 'typeorm';
import { Facility } from './entities/facility.entity';
import { CreateTypeDto } from './dto/create-type.dto';
import { Type } from './entities/type.entity';
import {
  HttpException,
  HttpStatus,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateFacilityDto } from './dto/create-facility.dto';
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

  //create facility
  async createFacility(createFacilityDto: CreateFacilityDto) {
    const {
      typeid,
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
    console.log(
      typeid,
      name,
      address,
      pincode,
      description,
      latitude,
      longitude,
      contact,
      imageUrl,
      status,
    );

    const facility = new Facility();
    // facility.typeid = typeid;
    facility.typeid = 1;
    facility.name = name;
    facility.address = address;
    facility.pincode = pincode;
    facility.description = description;
    facility.latitude = latitude;
    facility.longitude = longitude;
    facility.contact = contact;
    facility.imageUrl = imageUrl;
    facility.status = status;
    try {
      await facility.save();
      console.log(JSON.stringify(facility));
    } catch (error) {
      throw new InternalServerErrorException();
    }
    return typeid;
  }
}
