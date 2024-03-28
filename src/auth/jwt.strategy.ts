/**
 * JWT authentication strategy.
 * Extends PassportStrategy from '@nestjs/passport'.
 * Used for validating JWT tokens.
 */

import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secrete',
    });
  }

  /**
   * Validates the payload extracted from the JWT token.
   * @param payload Decoded payload from the JWT token.
   * @returns An object containing user identification and roles.
   */
  async validate(payload) {
    return {
      userId: payload.id,
      userName: payload.userName,
      roles: payload.roles,
    };
  }
}
