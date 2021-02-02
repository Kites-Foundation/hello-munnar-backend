import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
  ValidationPipe,
  ParseIntPipe,
  Logger,
} from '@nestjs/common';
import { FacilitiesService } from './facilities.service';
import { CreateFacilityDto } from './dto/create-facility.dto';
import { UpdateFacilityDto } from './dto/update-facility.dto';
import { CreateTypeDto } from './dto/create-type.dto';
import { ApiTags } from '@nestjs/swagger';
import { GetFacilitesFilterDto } from './dto/get-facility-filter.dto';

@ApiTags('Facilities Management')
@Controller('/api/v1/facilities')
export class FacilitiesController {
  private logger = new Logger('FacilitiesController');
  constructor(private readonly facilitiesService: FacilitiesService) {}

  @Post('type')
  createType(@Body() createTypeDto: CreateTypeDto) {
    return this.facilitiesService.createType(createTypeDto);
  }

  @Post()
  createFacility(@Body() createFacilityDto: CreateFacilityDto) {
    return this.facilitiesService.createFacility(createFacilityDto);
  }

  @Get()
  getFacilities(@Query(ValidationPipe) filterDto: GetFacilitesFilterDto) {
    return this.facilitiesService.getFacilities(filterDto);
  }

  @Get('type')
  findAllTypes() {
    this.logger.verbose(`Retrieving all facility types.`);
    return this.facilitiesService.findAllTypes();
  }

  @Get('type/:typeId')
  findOne(@Param('typeId') id: number) {
    return this.facilitiesService.findTypeById(+id);
  }

  @Get('/:id')
  getFacilityById(@Param('id', ParseIntPipe) id: number) {
    this.logger.verbose(`Retrieving facility with id ${id}.`);
    return this.facilitiesService.getFacilityById(id);
  }

  @Patch('/:id')
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateFacilityDto: UpdateFacilityDto,
  ) {
    return this.facilitiesService.updateFacility(+id, updateFacilityDto);
  }
  @Delete(':id')
  deleteFacility(@Param('id', ParseIntPipe) id: number) {
    return this.facilitiesService.deleteFacility(+id);
  }

  @Patch('type/:typeId')
  updateOne(
    @Param('typeId', ParseIntPipe) id: number,
    @Body() data: CreateTypeDto,
  ) {
    return this.facilitiesService.updateType(+id, data);
  }
  @Delete('/type/:id')
  deleteType(@Param('id', ParseIntPipe) id: number) {
    return this.facilitiesService.deleteType(+id);
  }
}
