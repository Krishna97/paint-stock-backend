/**
 * Service responsible for managing user-related data and operations.
 */

import { Injectable } from '@nestjs/common';
import { Role } from '../user.interface';
import { UserDto } from '../dto/user.dto';
import { users } from './user.data';

@Injectable()
export class UserService {

    /**
     * Retrieves all available user roles.
     * @returns An array containing all available user roles.
     */
    getAllRoles(): Role[] {
        return Object.values(Role);
    }

    /**
     * Updates the roles of a user with the specified ID.
     * @param userId The ID of the user to update.
     * @param roles The new roles to assign to the user.
     * @returns The updated user DTO if the user was found, otherwise undefined.
     */
    updateUserRoles(userId: number, roles: Role[]): UserDto | undefined {
        const userIndex = users.findIndex(user => user.id == userId);
        if (userIndex === -1) {
            return undefined; // User not found
        }
        users[userIndex].roles = roles;
        return users[userIndex];
    }

    /**
     * Retrieves all users.
     * @returns An array containing all users.
     */
    getAllUsers(): UserDto[] {
        return users;
    }

}
