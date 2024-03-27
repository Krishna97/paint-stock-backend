import { IsNotEmpty, IsString } from 'class-validator';
import { Status } from '../interfaces/paint.interface';

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
