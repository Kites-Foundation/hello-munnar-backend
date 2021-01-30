import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  BaseEntity,
} from 'typeorm';
import { Facility } from './facility.entity';

@Entity('facilityType')
export class Type extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 128 })
  name: string;

  @OneToMany((type) => Facility, (facility) => facility.type, { eager: true })
  facility: Facility[];
}
