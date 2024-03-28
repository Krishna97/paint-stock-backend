/**
 * Decorator function to set metadata for roles.
 * Uses SetMetadata from '@nestjs/common' to set metadata.
 * @param args Array of role strings.
 */

import { SetMetadata } from '@nestjs/common';

export const Roles = (...args: string[]) => SetMetadata('roles', args);
