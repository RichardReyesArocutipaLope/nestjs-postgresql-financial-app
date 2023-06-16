import { Injectable } from '@nestjs/common';
import { CreateReceivableDto } from './dto/create-receivable.dto';
import { UpdateReceivableDto } from './dto/update-receivable.dto';

@Injectable()
export class ReceivablesService {
  create(createReceivableDto: CreateReceivableDto) {
    return 'This action adds a new receivable';
  }

  findAll() {
    return `This action returns all receivables`;
  }

  findOne(id: number) {
    return `This action returns a #${id} receivable`;
  }

  update(id: number, updateReceivableDto: UpdateReceivableDto) {
    return `This action updates a #${id} receivable`;
  }

  remove(id: number) {
    return `This action removes a #${id} receivable`;
  }
}
