import { Module } from '@nestjs/common';
import { PaintService } from './paint.service';
import { PaintController } from './paint.controller';

@Module({
    providers: [PaintService],
    controllers: [PaintController],
})
export class PaintModule {}
