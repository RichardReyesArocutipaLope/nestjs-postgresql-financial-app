import { Injectable } from '@nestjs/common';
import { CreateCivilStatusDto } from './dto/create-civil-status.dto';
import { UpdateCivilStatusDto } from './dto/update-civil-status.dto';

@Injectable()
export class CivilStatusService {
  create(createCivilStatusDto: CreateCivilStatusDto) {
    return 'This action adds a new civilStatus';
  }

  findAll() {
    return `This action returns all civilStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} civilStatus`;
  }

  update(id: number, updateCivilStatusDto: UpdateCivilStatusDto) {
    return `This action updates a #${id} civilStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} civilStatus`;
  }
}
