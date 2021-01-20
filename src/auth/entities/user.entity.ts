import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  Unique,
} from 'typeorm';
@Entity('users')
@Unique(['email'])
export default class Users {
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
}
