/**
 * Data transfer object (DTO) class for creating or updating a paint.
 * Uses class-validator to define validation rules.
 */

import { IsNotEmpty, IsString } from 'class-validator';
import { Status } from '../paint.interface';

export class PaintDto {
  @IsNotEmpty()
  @IsString()
  readonly id: number;

  @IsNotEmpty()
  @IsString()
  readonly color: string;

  @IsNotEmpty()
  @IsString()
  readonly status: Status;

}
