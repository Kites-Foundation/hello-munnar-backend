import { IsOptional } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Users from '../../auth/entities/user.entity';
import { Roles } from './index';

@Entity('role_users')
export class RoleUsers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  roleId: number;

  @Column()
  @IsOptional()
  refId: number;

  @Column()
  @IsOptional()
  type: string;

  @Column()
  createdBy: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne((type) => Roles, (roles) => roles.roleUsers)
  @JoinColumn({ name: 'roleId' })
  roles: Roles;

  @ManyToOne((type) => Users, (user) => user.roleUsers)
  @JoinColumn({ name: 'userId' })
  user: Users;
}
