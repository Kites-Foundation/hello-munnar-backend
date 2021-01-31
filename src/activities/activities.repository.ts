import { EntityRepository, Repository } from 'typeorm';
import Activities from './entities/activity.entity';

@EntityRepository(Activities)
export class ActivityRepository extends Repository<Activities> {
  async createActivity(createActivityDto: any): Promise<any> {
    const {
      name,
      destination_id,
      description,
      cost,
      status,
      time_range,
      booking_url,
      image_url,
    } = createActivityDto;
    const activity = new Activities();
    activity.name = name;
    activity.destination_id = destination_id;
    activity.description = description;
    activity.cost = cost;
    activity.booking_url = booking_url;
    activity.time_range = time_range;
    activity.image_url = image_url;
    activity.status = status;
    await activity.save();
    return activity;
  }
}
