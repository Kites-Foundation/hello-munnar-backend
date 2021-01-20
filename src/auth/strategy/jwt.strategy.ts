import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from '../../config/constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        ExtractJwt.fromAuthHeaderAsBearerToken(),
        ExtractJwt.fromBodyField('access_token'),
      ]),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret || process.env.JWT,
    });
  }

  async validate(payload: any) {
    const { id, email } = payload;
    return {
      id,
      email,
    };
  }
}
