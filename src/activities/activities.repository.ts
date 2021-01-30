import { EntityRepository, Repository } from 'typeorm'
import { Activities} from './entities/activity.entity'
import {addActivityDto} from './dto'

@EntityRepository(Activity)
export class ActivityRepository extends Repository<Activity>{
    async createActivity(addAactivityDto: any): Promise <any>{
        const {name} = addAactivityDto
        const activity = new Activities()
        activity.name = name
        await activity.save()
        return activity
    }
}