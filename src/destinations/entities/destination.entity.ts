import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Destination')
export class Destination extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @Column({ length: 256 })
  description: string;

  @Column()
  type: number;

  @Column()
  route: number;

  @Column({ type: 'jsonb', nullable: true })
  image_url: any;

  @Column()
  current_temperature: string;

  @Column()
  best_time: string;

  @Column()
  best_month: string;

  @Column()
  tags: string;

  @Column()
  status: string;

  @Column({ type: 'jsonb', nullable: true })
  reviews: any;

  @Column({ type: 'jsonb', nullable: true })
  activities: any;
}
