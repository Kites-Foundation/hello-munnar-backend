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
  rating: number;

  @Column()
  description: string;

  @Column({ type: 'jsonb', nullable: true })
  imageUrl: any;

  @Column()
  source: string;

  @Column()
  destination: string;

  @Column()
  totalDistance: number;

  @Column()
  status: number;
}
