import { Body,
    Controller,
    Get,
    HttpStatus,
    Param,
    Post,
    Put,
    Req,
    Res,
    UseGuards, } from '@nestjs/common';
import { PaintService } from './paint.service';
import { Status } from '../interfaces/paint.interface';
import { Roles } from '../roles.decorator';
import { JwtAuthGuard } from '../jwt-auth.guard';
import { RoleGuard } from '../role.guard';
import { Role } from '../interfaces/user.interface';
import { PaintDto } from '../dto/paint.dto';

@Controller('paint')
export class PaintController {
    constructor(private paintService: PaintService) {}

    @Roles(Role.Manager)
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Put(':id/update')
    async changeStatus(@Param('id') id: number, @Body() body: { paint: PaintDto }): Promise<any> {
        try {
            
            const paint = body;
            console.log("Inside changeStatus: body", body);
            console.log("Inside changeStatus: paint", body.paint);
            const response = await this.paintService.changeStatus(paint);
            return response;
        } catch (error) {
            return error.response;
        }
    }

    @UseGuards(JwtAuthGuard, RoleGuard)
    @Get('getPaints')
    getPaints(@Req() req, @Res() res) {
        try {
            console.log("Inside Getpaints")
            const response = this.paintService.getPaints();
            return res.status(HttpStatus.OK).json({response});
        } catch (error) {
            return res.status(error.status).json(error.response);
        }
    }

}
