import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/index.dto'
import { ActivitiesRepository } from './activities.repository'; 
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ActivitiesService {
   constructor(
    @InjectRepository(ActivitiesRepository) 
    private activitiesRepository: ActivitiesRepository){}
   createActivity(data:any){
        return this.activitiesRepository.addFacility(data)

   }
}
