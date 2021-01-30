import { Module } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { RoutesController } from './routes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { routeRepository } from './routes.repository';

@Module({
  imports: [TypeOrmModule.forFeature([routeRepository])],
  controllers: [RoutesController],
  providers: [RoutesService],
})
export class RoutesModule {}
