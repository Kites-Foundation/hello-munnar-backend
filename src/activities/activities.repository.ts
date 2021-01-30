import { EntityRepository, Repository } from 'typeorm'
import Activities from './entities/activity.entity'
import { CreateActivityDto } from './dto/index.dto'

@EntityRepository(Activities)
export class ActivityRepository extends Repository<Activities>{
    async addActivity(addActivityDto: any): Promise <any>{
        const {name} = addActivityDto
        const activity = new Activities()
        activity.name = name
        activity.save()
        return activity
    }
}