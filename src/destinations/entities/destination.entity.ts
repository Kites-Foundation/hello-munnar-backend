import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('Destinations')
@Unique(['id'])
export default class Destination {
  @PrimaryGeneratedColumn()
  destinationId: number;

  @Column()
  name: string;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @Column({ length: 256 })
  Description: string;

  @Column()
  type: number;

  @Column()
  route: number;

  @Column({ type: 'jsonb', nullable: true })
  imageUrl: any;

  @Column()
  currentTemperature: string;

  @Column()
  bestTime: string;

  @Column()
  bestMonth: string;

  @Column()
  tags: string;

  @Column()
  status: string;

  @Column({ type: 'jsonb', nullable: true })
  reviews: any;

  @Column()
  activities: number;
}
