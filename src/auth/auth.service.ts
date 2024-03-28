import { Injectable, NotFoundException } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { sign } from 'jsonwebtoken';
import { AuthenticateDto } from '../dto/authenticate.dto';
import { IAuthenticate, Role } from '../user.interface';
import { users } from '../user/user.data';

@Injectable()
export class AuthService {
  
  authenticate(authenticateDto: AuthenticateDto): IAuthenticate {
    console.log('inside authenticate method');
    const user = users.find(
      (u) =>
        u.userName === authenticateDto.userName &&
        u.password === authenticateDto.password,
    );

    if (!user) throw new NotFoundException('Invalid credentials');

    const token = sign({ ...user }, 'secrete');

    return { token, user };
  }

  logout(req) {
    req.logout((err) => {
      if (err) {
        // Handle error, if any
        console.error('Error occurred during logout:', err);
      }
      // No error occurred, perform any additional cleanup or redirection
    });
  }
}
