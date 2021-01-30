import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { RoleUsers } from './index';
import { IsString, IsOptional } from 'class-validator';

@Entity('roles')
export class Roles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsOptional()
  name: string;

  @Column()
  type: string;

  @Column()
  description: string;

  @Column()
  createdBy: number;

  @Column()
  status: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany((type) => RoleUsers, (roleUsers) => roleUsers.roles)
  roleUsers: RoleUsers[];

}
