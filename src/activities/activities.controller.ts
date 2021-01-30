import {
  Controller,
  Request,
  Body,
  Post,
} from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { ApiTags } from '@nestjs/swagger'
import { CreateActivityDto } from './dto/index.dto'

@ApiTags('Activities Management')
@Controller('/api/v1/activities')
export class ActivitiesController {
  constructor(private activitiesService: ActivitiesService) {}
  
  @Post('addActivity')
    getActivity(@Request() req:any,
    @Body() body:CreateActivityDto){
      return this.activitiesService.createActivity(body)
    }
}
