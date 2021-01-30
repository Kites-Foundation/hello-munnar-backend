import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
@Entity('activities')
@Unique(['activityId'])
export default class Activities {
  @PrimaryGeneratedColumn()
  activityId: number;

  @Column()
  name: string;

  @Column()
  type: number;

  @Column()
  destination: number;

  @Column({ length: 256 })
  description: string;

  @Column()
  cost: string;

  @Column()
  status: string;

  @Column({ type: 'jsonb', nullable: true })
  timeRange: any;

  @Column()
  bookingURL: string;

  @Column({ type: 'jsonb', nullable: true })
  imagesUrl: any;
}
