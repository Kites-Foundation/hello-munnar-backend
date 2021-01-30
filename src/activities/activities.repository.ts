import { EntityRepository, Repository } from 'typeorm'
import Activities from './entities/activity.entity'

@EntityRepository(Activities)
export class ActivityRepository extends Repository<Activities>{
    async addActivity(addActivityDto: any): Promise <any>{
        const {name, type, destination, description,cost, status, timeRange, bookingUrl, imageUrl} = addActivityDto;
        const activity = new Activities()
        activity.name = name
        activity.type = type
        activity.destination = destination
        activity.description = description
        activity.cost = cost
        activity.bookingUrl = bookingUrl
        activity.timeRange = timeRange
        activity.imageUrl = imageUrl
        activity.status = status
        console.log(activity)
        await activity.save()
        return activity
    }
}
