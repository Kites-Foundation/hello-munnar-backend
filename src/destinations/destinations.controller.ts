import { Controller ,Post,Body} from '@nestjs/common';
import { DestinationsService } from './destinations.service';
import { AddDestinationDto } from './dto/addDestination.dto';


@Controller('/api/v1/')
export class DestinationsController {
    constructor (private destinationsService: DestinationsService) {}
    
    @Post('addDestinations')
    addDestinations(
        @Body() adddestinationsDto: AddDestinationDto,
        ): Promise<any>{                          
    
        return this.DestinationRepositor.addDestinations(adddestinationsDto); 
    }
}