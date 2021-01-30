import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/index.dto'

@Injectable()
export class ActivitiesService {
    createActivity(data:any){
        console.log(data)
    }
}
