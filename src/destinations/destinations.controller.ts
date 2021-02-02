import { Body, Controller, ParseIntPipe, Post, Req,Param, Patch} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DestinationsService } from './destinations.service';
import { AddDestinationDto } from './dto/addDestination.dto';

@ApiTags('Destination')
@Controller('/api/v1')
export class DestinationsController {
    constructor(private destinationService:DestinationsService){}
    @Post('addDestinations')
    addDestination(
    @Req()req:any,
    @Body() AddDestinationDto:AddDestinationDto
    ):Promise<any>{
        return this.destinationService.addDestination(AddDestinationDto);
    }

    @Patch('updateDestinations/:id')
    update(
      @Param('id', ParseIntPipe) id: string,
      @Body() updateDestination: AddDestinationDto,
    ) {
      return this.destinationService.updateDestination(+id, updateDestination);
    }


    
}
