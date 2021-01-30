import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import { Type } from './type.entity';

@Entity('facility')
export class Facility extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 128 })
  name: string;

  @Column({ type: 'jsonb', nullable: false })
  address: any;

  @Column()
  pincode: number;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @Column({ length: 256 })
  description: string;

  @Column({ length: 11 })
  contact: string;

  @Column({ type: 'jsonb', nullable: true })
  imageUrl: any;

  @Column()
  status: string;

  @ManyToOne((type) => Type, (type) => type.facility, { eager: false })
  type: Type;
}
