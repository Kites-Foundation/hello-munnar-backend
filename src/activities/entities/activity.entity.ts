import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
@Entity('activities')
@Unique(['id'])
export default class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column({ length: 256 })
  description: string;

  @Column()
  cost: string;

  @Column()
  timeRange: JSON;

  @Column()
  bookingURL: string;
}
