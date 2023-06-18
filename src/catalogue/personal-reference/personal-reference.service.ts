import { Injectable } from '@nestjs/common';
import { CreatePersonalReferenceDto } from './dto/create-personal-reference.dto';
import { UpdatePersonalReferenceDto } from './dto/update-personal-reference.dto';

@Injectable()
export class PersonalReferenceService {
  create(createPersonalReferenceDto: CreatePersonalReferenceDto) {
    return 'This action adds a new personalReference';
  }

  findAll() {
    return `This action returns all personalReference`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personalReference`;
  }

  update(id: number, updatePersonalReferenceDto: UpdatePersonalReferenceDto) {
    return `This action updates a #${id} personalReference`;
  }

  remove(id: number) {
    return `This action removes a #${id} personalReference`;
  }
}
