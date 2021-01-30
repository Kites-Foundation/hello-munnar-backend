import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { AuthController } from './controllers';
import { Users } from './entities';
import { AuthService } from './services';
import { JwtStrategy, LocalStrategy } from './strategy';
import { CqrsModule } from '@nestjs/cqrs';

config();

@Module({
  imports: [
    TypeOrmModule.forFeature([Users]),
    PassportModule,
    CqrsModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
