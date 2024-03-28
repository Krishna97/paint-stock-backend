/**
 * Controller responsible for handling HTTP requests related to paints.
 * Uses decorators to define route handlers and guard usage.
 */

import {
    Body,
    Controller,
    Get,
    HttpStatus,
    Param,
    Post,
    Put,
    Req,
    Res,
    UseGuards,
} from '@nestjs/common';
import { PaintService } from './paint.service';
import { Roles } from '../auth/roles.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RoleGuard } from '../auth/role.guard';
import { Role } from '../user.interface';
import { PaintDto } from '../dto/paint.dto';

@Controller('paint')
export class PaintController {
    constructor(private paintService: PaintService) { }

    /**
     * Handler for changing the status of a paint.
     * Requires Manager or Painter role.
     * Uses JWT authentication and role-based authorization guards.
     */
    @Roles(Role.Manager, Role.Painter)
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

    /**
     * Handler for retrieving all paints.
     * Requires JWT authentication and role-based authorization guards.
     */
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Get('getPaints')
    getPaints(@Req() req, @Res() res) {
        try {
            console.log("Inside Getpaints")
            const response = this.paintService.getPaints();
            return res.status(HttpStatus.OK).json({ response });
        } catch (error) {
            return res.status(error.status).json(error.response);
        }
    }

}
