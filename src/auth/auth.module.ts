import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PaintController } from './paint/paint.controller';
import { PaintService } from './paint/paint.service';

@Module({
  providers: [AuthService, PaintService],
  controllers: [AuthController, PaintController],
})
export class AuthModule {}
