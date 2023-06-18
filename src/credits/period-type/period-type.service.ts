import { Injectable } from '@nestjs/common';
import { CreatePeriodTypeDto } from './dto/create-period-type.dto';
import { UpdatePeriodTypeDto } from './dto/update-period-type.dto';

@Injectable()
export class PeriodTypeService {
  create(createPeriodTypeDto: CreatePeriodTypeDto) {
    return 'This action adds a new periodType';
  }

  findAll() {
    return `This action returns all periodType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} periodType`;
  }

  update(id: number, updatePeriodTypeDto: UpdatePeriodTypeDto) {
    return `This action updates a #${id} periodType`;
  }

  remove(id: number) {
    return `This action removes a #${id} periodType`;
  }
}
