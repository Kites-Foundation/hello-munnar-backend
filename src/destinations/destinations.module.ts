import { Module } from '@nestjs/common';
import { DestinationsController } from './destinations.controller';
import { DestinationsService } from './destinations.service';

@Module({
  controllers: [DestinationsController],
  providers: [DestinationsService]
})
export class DestinationsModule {}
