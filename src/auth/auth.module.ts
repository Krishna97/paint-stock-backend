import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PaintController } from '../paint/paint.controller';
import { PaintService } from '../paint/paint.service';
import { UserController } from '../user/user.controller';
import { UserService } from '../user/user.service';

@Module({
  providers: [AuthService, PaintService],
  controllers: [AuthController, PaintController],
})
export class AuthModule {}
