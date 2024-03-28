import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { Role } from '../user.interface';
import { UserDto } from '../dto/user.dto';
import { users } from './user.data';

@Injectable()
export class UserService {
    
    getAllRoles(): Role[] {
        return Object.values(Role);
    }

    updateUserRoles(userId: number, roles: Role[]): UserDto | undefined {
        console.log('roles are1: ', roles);
        console.log('users: ', users);
        const userIndex = users.findIndex(user => user.id == userId);
        if (userIndex === -1) {
          return undefined; // User not found
        }
        console.log('roles are: ', roles);
        users[userIndex].roles = roles;
        return users[userIndex];
    }

    getAllUsers(): UserDto[] {
        return users;
    }
  
}
