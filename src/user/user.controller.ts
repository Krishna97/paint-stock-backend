import { Body, Controller, Get, NotFoundException, Param, Patch, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Role } from '../user.interface';
import { UpdateUserRolesDto, UserDto } from '../dto/user.dto';
import { Roles } from '../auth/roles.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RoleGuard } from '../auth/role.guard';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
  
    @UseGuards(JwtAuthGuard, RoleGuard)  
    @Get('roles')
    getAllRoles(): Role[] {
        return this.userService.getAllRoles();
    }

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

    @Roles('admin')
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Get()
    getAllUsers(): UserDto[] {
        return this.userService.getAllUsers();
    }
}
