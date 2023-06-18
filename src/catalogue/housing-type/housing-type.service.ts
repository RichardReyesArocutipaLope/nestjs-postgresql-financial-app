import { Injectable } from '@nestjs/common';
import { CreateHousingTypeDto } from './dto/create-housing-type.dto';
import { UpdateHousingTypeDto } from './dto/update-housing-type.dto';

@Injectable()
export class HousingTypeService {
  create(createHousingTypeDto: CreateHousingTypeDto) {
    return 'This action adds a new housingType';
  }

  findAll() {
    return `This action returns all housingType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} housingType`;
  }

  update(id: number, updateHousingTypeDto: UpdateHousingTypeDto) {
    return `This action updates a #${id} housingType`;
  }

  remove(id: number) {
    return `This action removes a #${id} housingType`;
  }
}
