import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Type } from './type.entity';

@Entity('facilities')
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

  @Column()
  mobile: number;

  @Column({ type: 'jsonb', nullable: true })
  imageUrl: any;

  @Column()
  status: number;

  @ManyToOne((type) => Type, (type) => type.facility, { eager: false })
  @JoinColumn({ name: 'typeId' })
  type: Type;
}
