import { Entity, Column, PrimaryGeneratedColumn, Unique, BaseEntity } from 'typeorm';
@Entity('activities')
@Unique(['activityId'])
export default class Activities extends BaseEntity {
  @PrimaryGeneratedColumn()
  activityId: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  destination: string;

  @Column({ length: 256 })
  description: string;

  @Column()
  cost: string;

  @Column()
  status: string;

  @Column({ type: 'jsonb', nullable: true })
  timeRange: any;

  @Column({ type: 'jsonb', nullable: true })
  booking_url: any;

  @Column({ type: 'jsonb', nullable: true })
  imageUrl: any;
}
