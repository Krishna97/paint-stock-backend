/**
 * Controller for handling authentication-related HTTP requests.
 * Exposes endpoints for user authentication, profile retrieval, and logout.
 */

import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
  Request
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthenticateDto } from '../dto/authenticate.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { RoleGuard } from './role.guard';
import { Roles } from './roles.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  /**
   * Endpoint for user login.
   * Authenticates the user based on the provided credentials.
   * @param res Response object to send HTTP response
   * @param authenticateDto DTO containing user credentials
   * @returns Response with authentication token and user information
   */
  @Post('login')
  login(@Res() res, @Body() authenticateDto: AuthenticateDto) {
    try {
      const response = this.authService.authenticate(authenticateDto);
      return res.json(response);
    } catch (error) {
      return res.status(error.status).json(error.response);
    }
  }

  /**
   * Endpoint for user logout.
   * Requires authentication with a valid JWT token.
   * @param req Request object containing user information
   */
  @UseGuards(JwtAuthGuard)
  @Post('logout')
  async logout(@Request() req) {
    await this.authService.logout(req);
  }
}
