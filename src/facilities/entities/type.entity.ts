import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  BaseEntity,
} from 'typeorm';
import { Facility } from './facility.entity';

@Entity('facility_types')
export class Type extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 128 })
  facilityType: string;

  @OneToMany((type) => Facility, (facility) => facility.type, { eager: true })
  facility: Facility[];
}
