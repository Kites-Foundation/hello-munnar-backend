import {
  Body,
  Controller,
  ParseIntPipe,
  Post,
  Req,
  Delete,
  Param,
  Patch,
  Get,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DestinationsService } from './destinations.service';
import { AddDestinationDto } from './dto/addDestination.dto';

@ApiTags('Destination')
@Controller('/api/v1')
export class DestinationsController {
  constructor(private destinationService: DestinationsService) {}
  @Post('addDestinations')
  addDestination(
    @Req() req: any,
    @Body() AddDestinationDto: AddDestinationDto,
  ): Promise<any> {
    return this.destinationService.addDestination(AddDestinationDto);
  }
    @Patch('updateDestinations/:id')
    update(
      @Param('id', ParseIntPipe) id: string,
      @Body() updateDestination: AddDestinationDto,
    ) {
      return this.destinationService.updateDestination(+id, updateDestination);
    }

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.destinationService.delete(id);
    }
    @Get('all')
    async getALL():Promise<Destination[]>{
            return await this.destinationService.findAll();
        }
}
