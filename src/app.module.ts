import { Module } from '@nestjs/common';
import { ConfigModule } from './config';
import { SessionModule } from 'nestjs-session';
import { watchmanModule } from './watchman/watchman.module';

@Module({
  imports: [
    SessionModule.forRoot({
      session: {
        secret: 'tomahawk_pilot',
        resave: true,
        saveUninitialized: true,
      },
    }),
    watchmanModule,
    ConfigModule.forRoot('munnar'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
