import { Injectable, NotFoundException } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { sign } from 'jsonwebtoken';
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

  changeStatus(paint): PaintDto {
    const paintIndex = this.paints.findIndex(p => p.id === paint.id);
    console.log("inside changeStatus service");
    console.log("paint index need to be updated ", paintIndex);
    if (paintIndex === -1) {
      throw new NotFoundException('Invalid paint');
    }

    this.paints[paintIndex].status = paint.status;
    console.log('paints after update: ', this.paints)
    return this.paints[paintIndex];
  }

  getPaints(): PaintDto[] {
    console.log('get paints: ', this.paints)
    return this.paints;
  }

}
