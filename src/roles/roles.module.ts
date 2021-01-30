import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { RoleActions, Roles } from './entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../auth/user.repository';
import { RoleUserRepository } from './roleUser.repository';
import { AuthCommandHandler, RoleCheckCommandHandler } from './cqrs';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [
    TypeOrmModule.forFeature([Roles, RoleActions]),
    TypeOrmModule.forFeature([RoleUserRepository]),
    TypeOrmModule.forFeature([UserRepository]),
    CqrsModule,
  ],
  controllers: [RolesController],
  providers: [RolesService, AuthCommandHandler, RoleCheckCommandHandler],
})
export class RolesModule {}
