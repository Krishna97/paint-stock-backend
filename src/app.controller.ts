/**
 * Controller responsible for handling root HTTP requests.
 */

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  /**
   * Handles GET requests to the root URL.
   * @returns A string containing a greeting message.
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
