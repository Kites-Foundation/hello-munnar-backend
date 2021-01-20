import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { watchmanController } from './watchman.controller';

@Module({
  imports: [TerminusModule],
  controllers: [watchmanController],
})
export class watchmanModule {}
