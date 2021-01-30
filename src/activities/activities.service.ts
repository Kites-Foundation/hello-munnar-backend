import { Injectable } from '@nestjs/common';
import { ActivityRepository } from './activities.repository'; 
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ActivitiesService {
   constructor(
    @InjectRepository(ActivityRepository) 
    private activitiesRepository: ActivityRepository){}
   createActivity(data:any){
        return this.activitiesRepository.addActivity(data)

   }
}
