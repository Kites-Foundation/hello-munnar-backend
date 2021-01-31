import { Body, Controller, Post, Req } from '@nestjs/common';
import { DestinationsService } from './destinations.service';
import { AddDestinationDto } from './dto/addDestination.dto';

@Controller('/api/v1/destinations')
export class DestinationsController {
  constructor(private destinationService: DestinationsService) {}
  @Post('/api/v1/addDestination')
  addDestination(
    @Req() req: any,
    @Body() AddDestinationDto: AddDestinationDto,
  ): Promise<any> {
    return this.destinationService.addDestination(AddDestinationDto);
  }
}
