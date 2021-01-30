import { EntityRepository, Repository } from 'typeorm'
import Activities from './entities/activity.entity'

@EntityRepository(Activities)
export class ActivityRepository extends Repository<Activities>{
    async addActivity(addActivityDto: any): Promise <any>{
        const {name, type, destination, description,cost, status, time_range, booking_url, image_url} = addActivityDto;
        const activity = new Activities()
        activity.name = name
        activity.type = type
        activity.destination = destination
        activity.description = description
        activity.cost = cost
        activity.booking_url = booking_url
        activity.time_range = time_range
        activity.image_url = image_url
        activity.status = status
        console.log(activity)
        await activity.save()
        return activity
    }
}
