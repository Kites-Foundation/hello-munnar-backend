import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFacilityDto } from './dto/create-facility.dto';
import { UpdateFacilityDto } from './dto/update-facility.dto';
import { FacilityRepository } from './facility.repository';
import { CreateTypeDto } from './dto/create-type.dto';
import { Type } from './entities/type.entity';

@Injectable()
export class FacilitiesService {
  constructor(
    @InjectRepository(FacilityRepository)
    private readonly facilityRepository: FacilityRepository,
  ) {}

  async getFacilityById(id: number) {
    const found = await this.facilityRepository.findOne({
      where: { id, status: 1 },
    });
    if (!found) {
      throw new NotFoundException(`The facility with ID "${id}" not found!!`);
    }
    return found;
  }

  create(createFacilityDto: CreateFacilityDto) {
    return 'This action adds a new facility';
  }
  createType(createTypeDto: CreateTypeDto) {
    return this.facilityRepository.createType(createTypeDto);
  }

  createFacility(createFacilityDto: CreateFacilityDto) {
    return this.facilityRepository.createFacility(createFacilityDto);
  }

  async findAllTypes(): Promise<Type[]> {
    const types = await this.facilityRepository.findAllTypes();
    return types;
  }
  async updateType(id: number, data: CreateTypeDto): Promise<any> {
    return await this.facilityRepository.updateType(id, data);
  }

  async findTypeById(id: number): Promise<any> {
    const type = await this.facilityRepository.findTypeById(id);
    if (type) {
      return type;
    } else {
      return new NotFoundException({ detail: 'No such Type Exist' });
    }
  }
  findAll() {
    return `This action returns all facilities`;
  }

  findOne(id: number) {
    return `This action returns a #${id} facility`;
  }

  updateFacility(id: number, updateFacilityDto: UpdateFacilityDto) {
    return this.facilityRepository.updateFacility(id, updateFacilityDto);
  }

  async deleteFacility(id: number): Promise<any> {
    const facility = await this.facilityRepository.findOne({
      id: id,
      status: 1,
    });
    if (facility) {
      facility.status = 2;
      await this.facilityRepository.save(facility);
      return {
        sucess: true,
        message: 'Deleted Successfully',
      };
    } else {
      return {
        sucess: false,
        message: 'Deletion Failed',
      };
    }
  }

  async deleteType(id: number): Promise<any> {
    return this.facilityRepository.deleteType(id);
  }
}
