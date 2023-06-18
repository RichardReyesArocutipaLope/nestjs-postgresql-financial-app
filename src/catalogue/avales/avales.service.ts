import { Injectable } from '@nestjs/common';
import { CreateAvalDto } from './dto/create-aval.dto';
import { UpdateAvalDto } from './dto/update-aval.dto';

@Injectable()
export class AvalesService {
  create(createAvalDto: CreateAvalDto) {
    return 'This action adds a new avale';
  }

  findAll() {
    return `This action returns all avales`;
  }

  findOne(id: number) {
    return `This action returns a #${id} avale`;
  }

  update(id: number, updateAvalDto: UpdateAvalDto) {
    return `This action updates a #${id} avale`;
  }

  remove(id: number) {
    return `This action removes a #${id} avale`;
  }
}
