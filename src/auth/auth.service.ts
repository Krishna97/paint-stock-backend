/**
 * Service responsible for authentication-related operations.
 * Handles user authentication and logout functionality.
 */

import { Injectable, NotFoundException } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { AuthenticateDto } from '../dto/authenticate.dto';
import { IAuthenticate, Role } from '../user.interface';
import { users } from '../user/user.data';

@Injectable()
export class AuthService {

  /**
   * Authenticates a user based on the provided credentials.
   * Generates and returns a JWT token upon successful authentication.
   * @param authenticateDto DTO containing user credentials (username and password).
   * @returns An object containing the generated JWT token and user information.
   * @throws NotFoundException if invalid credentials are provided.
   */
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

  /**
   * Performs logout for the authenticated user.
   * @param req HTTP request object containing the user session.
   */
  logout(req) {
    req.logout((err) => {
      if (err) {
        // Handle error, if any
        console.error('Error occurred during logout:', err);
      }
    });
  }
}
