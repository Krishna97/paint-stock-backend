import { IsNotEmpty, IsString } from 'class-validator';
import { Role } from '../user.interface';

export class UserDto {
  @IsNotEmpty()
  @IsString()
  readonly id: number;

  @IsNotEmpty()
  @IsString()
  readonly userName: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @IsNotEmpty()
  @IsString()
  readonly roles: Role[];
}

export class UpdateUserRolesDto {
  roles: Role[];
}
