import { Injectable, NotFoundException } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { sign } from 'jsonwebtoken';
import { AuthenticateDto } from './dto/authenticate.dto';
import { IAuthenticate, Role } from './interfaces/user.interface';

@Injectable()
export class AuthService {
  users = [
    {
      id: faker.datatype.uuid(),
      "userName": 'John JO',
      "password": 'john',
      role: Role.Viewer,
    },
    {
      id: faker.datatype.uuid(),
      userName: 'Jane JA',
      password: 'jane',
      role: Role.Manager,
    },
  ];

  authenticate(authenticateDto: AuthenticateDto): IAuthenticate {
    console.log('inside authenticate method');
    const user = this.users.find(
      (u) =>
        u.userName === authenticateDto.userName &&
        u.password === authenticateDto.password,
    );

    if (!user) throw new NotFoundException('Invalid credentials');

    const token = sign({ ...user }, 'secrete');

    return { token, user };
  }
}
