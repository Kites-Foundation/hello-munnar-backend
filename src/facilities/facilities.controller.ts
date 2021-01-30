import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { FacilitiesService } from './facilities.service';
import { CreateFacilityDto } from './dto/create-facility.dto';
import { UpdateFacilityDto } from './dto/update-facility.dto';
import { CreateTypeDto } from './dto/create-type.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Facilities Management')
@Controller('/api/v1/facilities')
export class FacilitiesController {
  constructor(private readonly facilitiesService: FacilitiesService) {}

  @Post('createtype')
  createType(@Body() createTypeDto: CreateTypeDto) {
    return this.facilitiesService.createType(createTypeDto);
  }

  @Post()
  create(@Body() createFacilityDto: CreateFacilityDto) {
    return this.facilitiesService.create(createFacilityDto);
  }

  @Get('allTypes')
  findAllTypes() {
    return this.facilitiesService.findAllTypes();
  }

  @Get(':typeId')
  findOne(@Param('typeId') id: number) {
    return this.facilitiesService.findTypeById(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateFacilityDto: UpdateFacilityDto,
  ) {
    return this.facilitiesService.update(+id, updateFacilityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.facilitiesService.remove(+id);
  }

  @Patch('update/:typeId')
  updateOne(@Param('typeId') id: number, @Body() data: CreateTypeDto) {
    return this.facilitiesService.updateType(+id, data);
  }
}
