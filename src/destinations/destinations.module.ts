import { Module } from '@nestjs/common';
import { DestinationsController } from './destinations.controller';
import { DestinationsService } from './destinations.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DestinationRepository } from './destination.repository';
@Module({
  imports: [TypeOrmModule.forFeature([DestinationRepository])],
  controllers: [DestinationsController],
  providers: [DestinationsService],
})
export class DestinationsModule {}
