/**
 * Data transfer object (DTO) class for authentication.
 * Uses class-validator to define validation rules.
 */

import { IsNotEmpty, IsString } from 'class-validator';

export class AuthenticateDto {
  @IsNotEmpty()
  @IsString()
  readonly userName: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
