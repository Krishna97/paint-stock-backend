/**
 * Service responsible for managing paints.
 * Contains methods to change paint status and retrieve paints.
 */

import { Injectable, NotFoundException } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { Status } from '../paint.interface';
import { PaintDto } from '../dto/paint.dto';

@Injectable()
export class PaintService {
  paints = [
    {
      id: faker.datatype.number(),
      color: 'Blue',
      status: Status.available,
    },
    {
      id: faker.datatype.number(),
      color: 'Grey',
      status: Status.available,
    },
    {
      id: faker.datatype.number(),
      color: 'Black',
      status: Status.runningLow,
    },
    {
      id: faker.datatype.number(),
      color: 'White',
      status: Status.runningLow,
    },
    {
      id: faker.datatype.number(),
      color: 'Purple',
      status: Status.outOfStock,
    },
  ];

  /**
   * Changes the status of a paint based on provided data.
   * @param paint The paint data including id and new status.
   * @returns The updated paint object.
   * @throws NotFoundException if the provided paint id is not found.
   */
  changeStatus(paint): PaintDto {
    const paintIndex = this.paints.findIndex(p => p.id === paint.id);
    console.log("inside changeStatus service");
    console.log("paint index need to be updated ", paintIndex);
    // Check if paint index is valid
    if (paintIndex === -1) {
      throw new NotFoundException('Invalid paint');
    }

    // Update the status of the paint
    this.paints[paintIndex].status = paint.status;
    console.log('paints after update: ', this.paints)
    return this.paints[paintIndex];
  }

  /**
   * Retrieves all paints.
   * @returns An array of paint objects.
   */
  getPaints(): PaintDto[] {
    console.log('get paints: ', this.paints)
    return this.paints;
  }

}
