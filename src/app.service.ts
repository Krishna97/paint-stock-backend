/**
 * Service responsible for providing the main greeting message of the application.
 * Provides a method to get the hello message.
 */

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  /**
   * Returns the main greeting message of the application.
   * @returns A string containing the main greeting message.
   */
  getHello(): string {
    return 'Hello World!';
  }
}
