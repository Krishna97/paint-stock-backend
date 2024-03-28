// users.data.ts

import { faker } from '@faker-js/faker';
import { Role } from '../user.interface';

export let users = [
    {
      id: 1,
      "userName": 'John',
      "password": 'john',
      roles: [Role.Viewer],
    },
    {
      id: 2,
      userName: 'Jane',
      password: 'jane',
      roles: [Role.Manager, Role.Painter],
    },
    {
      id: 3,
      userName: 'Chris',
      password: 'chris',
      roles: [Role.Painter],
    },
    {
      id: 4,
      userName: 'Tom',
      password: 'tom',
      roles: [Role.Painter],
    },
    {
      id: 5,
      userName: 'Adam',
      password: 'adam',
      roles: [Role.Admin],
    },
  ];
