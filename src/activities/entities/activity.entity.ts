import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  BaseEntity,
} from 'typeorm';
@Entity('activities')
@Unique(['id'])
export default class Activities extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  destination_id: number;

  @Column({ length: 256 })
  description: string;

  @Column()
  cost: string;

  @Column()
  status: string;

  @Column({ type: 'jsonb', nullable: true })
  time_range: any;

  @Column({ type: 'jsonb', nullable: true })
  booking_url: any;

  @Column({ type: 'jsonb', nullable: true })
  image_url: any;
}
