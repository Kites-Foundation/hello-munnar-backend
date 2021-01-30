import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  Unique,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { RoleUsers } from '../../roles/entities';
@Entity('users')
@Unique(['email'])
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uid: string;

  @Column()
  name: string;

  @Column({ length: 128 })
  email: string;

  @Column({ length: 128 })
  password: string;

  @Column()
  token: string;

  @Column()
  status: string;

  @Column()
  type: string;

  @Column()
  lastLogin: Date;

  @Column()
  verifiedAt: Date;

  @Column()
  verifiedBy: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  createdBy: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  updatedBy: string;

  @OneToMany((type) => RoleUsers, (roleUsers) => roleUsers.user, {
    cascade: ['update'],
  })
  @JoinColumn({ name: 'id' })
  roleUsers: RoleUsers[];
}
