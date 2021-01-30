import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  BaseEntity,
} from 'typeorm';

@Entity('routes')
export class Route extends BaseEntity {
  @PrimaryGeneratedColumn()
  routeId: number;

  @Column()
  routeName: string;

  @Column()
  review: number;

  @Column()
  description: string;

  @Column()
  imageUrl: string;

  @Column()
  source: string;

  @Column()
  destination: string;

  @Column()
  totalDistance: number;
}
