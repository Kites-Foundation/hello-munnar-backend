import { Module } from '@nestjs/common';
import { DestinationsController } from './destinations.controller';
import { DestinationsService } from './destinations.service';
import { RoleCheckCommand } from './cqrs';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [CqrsModule],
  controllers: [DestinationsController],
  providers: [DestinationsService, RoleCheckCommand],
})
export class DestinationsModule {}
