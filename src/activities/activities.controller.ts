import { Controller } from '@nestjs/common';
import { ActivitiesService } from './activities.service';

@Controller('/api/v1/activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}
}
