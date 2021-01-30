import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFacilityDto } from './dto/create-facility.dto';
import { UpdateFacilityDto } from './dto/update-facility.dto';
import { FacilityRepository } from './facility.repository';
import { CreateTypeDto } from './dto/create-type.dto';

@Injectable()
export class FacilitiesService {
  constructor(
    @InjectRepository(FacilityRepository)
    private readonly facilityRepository: FacilityRepository,
  ) {}

  create(createFacilityDto: CreateFacilityDto) {
    return 'This action adds a new facility';
  }
  createType(createTypeDto: CreateTypeDto) {
    return this.facilityRepository.createType(createTypeDto);
  }

  createFacility(createFacilityDto: CreateFacilityDto) {
    return this.facilityRepository.createFacility(createFacilityDto);
  }

  findAll() {
    return `This action returns all facilities`;
  }

  findOne(id: number) {
    return `This action returns a #${id} facility`;
  }

  update(id: number, updateFacilityDto: UpdateFacilityDto) {
    return `This action updates a #${id} facility`;
  }

  remove(id: number) {
    return `This action removes a #${id} facility`;
  }
}
