/**
 * Controller responsible for handling user-related endpoints.
 * Contains methods for managing user roles and retrieving user information.
 */

import { Body, Controller, Get, NotFoundException, Param, Patch, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Role } from '../user.interface';
import { UpdateUserRolesDto, UserDto } from '../dto/user.dto';
import { Roles } from '../auth/roles.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RoleGuard } from '../auth/role.guard';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    /**
     * Endpoint to retrieve all available user roles.
     * @returns An array of Role objects representing available roles.
     */
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Get('roles')
    getAllRoles(): Role[] {
        return this.userService.getAllRoles();
    }

    /**
     * Endpoint to update user roles.
     * @param userId The ID of the user to update roles.
     * @param updateUserRolesDto The DTO containing updated user roles.
     * @returns The updated user object.
     * @throws NotFoundException if the user with the provided ID is not found.
     */
    @Roles('admin')
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Patch(':userId/roles')
    updateUserRoles(@Param('userId') userId: number, @Body() updateUserRolesDto: UpdateUserRolesDto): UserDto {
        const updatedUser = this.userService.updateUserRoles(userId, updateUserRolesDto.roles);
        if (!updatedUser) {
            throw new NotFoundException('User not found');
        }
        return updatedUser;
    }

    /**
     * Endpoint to retrieve all users.
     * @returns An array of UserDto objects representing all users.
     */
    @Roles('admin')
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Get()
    getAllUsers(): UserDto[] {
        return this.userService.getAllUsers();
    }
}
