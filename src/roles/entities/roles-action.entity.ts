import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Users } from '../../auth/entities';
import { Roles } from './index';

@Entity('role_actions')
export class RoleActions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  roleId: number;

  @Column()
  method: string;

  @Column()
  path: string;

  @Column()
  createdBy: number;

  @Column()
  status: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
