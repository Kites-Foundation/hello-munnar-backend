import { Controller,Post,Body, Req } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { CreateActivityDto} from './dto/create-activity.dto';

@Controller('/api/v1/activities')
export class ActivitiesController {
  constructor(private activitiesService: ActivitiesService) {}

  @Post()
  createActivity(@Body() createActivityDto: CreateActivityDto,) {
    return this.activitiesService.createActivity(createActivityDto);
  }
  
}
