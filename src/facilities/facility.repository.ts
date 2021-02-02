import { EntityRepository, getConnection, Repository } from 'typeorm';
import { Facility } from './entities/facility.entity';
import { CreateTypeDto } from './dto/create-type.dto';
import { Type } from './entities/type.entity';
import { UpdateFacilityDto } from './dto/update-facility.dto';
import {
  HttpException,
  HttpStatus,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { CreateFacilityDto } from './dto/create-facility.dto';
import { NotFoundException } from '@nestjs/common';
import { GetFacilitesFilterDto } from './dto/get-facility-filter.dto';
@EntityRepository(Facility)
export class FacilityRepository extends Repository<Facility> {
  private logger = new Logger('FacilityRepository');
  async createType(createTypeDto: CreateTypeDto) {
    const { facilityType } = createTypeDto;
    const nameIfExist = await getConnection()
      .createQueryBuilder()
      .select('type')
      .from(Type, 'type')
      .where('type.facilityType = :exist', { exist: facilityType })
      .getOne();
    if (nameIfExist) {
      return new HttpException(
        { detail: 'Type already exist' },
        HttpStatus.CONFLICT,
      );
    }
    const type = new Type();
    type.facilityType = facilityType;
    try {
      await type.save();
    } catch (error) {
      this.logger.error(
        `Error creating the type ${type.facilityType}.}`,
        error.stack,
      );
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
    else {
      this.logger.verbose(`No such facility type exists!!`);
      throw new NotFoundException({
        detail: 'No such facility type exists!!',
      });
    }
  }
  async updateType(id: number, updateType: CreateTypeDto): Promise<any> {
    const { facilityType } = updateType;

    const type = await getConnection()
      .createQueryBuilder()
      .select('type')
      .from(Type, 'type')
      .where('type.id = :id', { id: id })
      .getOne();

    if (type) {
      type.facilityType = facilityType;
      await type.save();
      return type;
    } else {
      this.logger.verbose(`Could not find the type with the id ${id}`);
      return `Could not find the type with the id ${id}`;
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
      mobile,
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
    facility.mobile = mobile;
    facility.imageUrl = imageUrl;
    facility.status = status;
    facility.type = type;
    try {
      await facility.save();
    } catch (error) {
      this.logger.error(
        `Error creating the facility for the type:"${facility.type}". Data:{createFacilityDto}`,
        error.stack,
      );
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
      this.logger.verbose(`Type with id "${id}" not found!!`);
      throw new NotFoundException(`Type with id "${id}" not found!!`);
    } else {
      this.logger.verbose(`Type with id "${id}" deleted!!`);
      return {
        sucess: true,
        message: 'Deleted Successfully',
      };
    }
  }

  async updateFacility(
    facilityID: number,
    updateFacilityDto: UpdateFacilityDto,
  ) {
    const {
      name,
      address,
      pincode,
      description,
      latitude,
      longitude,
      mobile,
      imageUrl,
      status,
    } = updateFacilityDto;

    const facility = await getConnection()
      .createQueryBuilder()
      .select('facility')
      .from(Facility, 'facility')
      .where('facility.id = :id', { id: facilityID })
      .getOne();

    if (facility) {
      facility.name = name;
      facility.address = address;
      facility.pincode = pincode;
      facility.description = description;
      facility.latitude = latitude;
      facility.longitude = longitude;
      facility.mobile = mobile;
      facility.imageUrl = imageUrl;
      facility.status = status;

      try {
        await facility.save();
      } catch (error) {
        this.logger.error(
          `Error updating the facility for Data:${updateFacilityDto}`,
          error.stack,
        );
        throw new InternalServerErrorException();
      }
      return facility;
    } else {
      this.logger.verbose(`Invalid facility id:${facilityID}`);
      return 'invalid facility ID';
    }
  }

  async getFacilities(filterDto: GetFacilitesFilterDto) {
    const { search } = filterDto;
    const query = this.createQueryBuilder('task');

    if (search) {
      query.andWhere('(task.name ILIKE :search )', { search: `%${search}%` });
    }
    try {
      const result = await query.getMany();
      return result;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
