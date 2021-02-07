import { CacheModule, Module } from '@nestjs/common';
import { FacilitiesService } from './facilities.service';
import { FacilitiesController } from './facilities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacilityRepository } from './facility.repository';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    TypeOrmModule.forFeature([FacilityRepository]),
    CacheModule.register({
      store: redisStore,
      host: process.env.X_REDIS_HOST,
      port: process.env.X_REDIS_PORT,
    }),
  ],
  controllers: [FacilitiesController],
  providers: [FacilitiesService],
})
export class FacilitiesModule {}
