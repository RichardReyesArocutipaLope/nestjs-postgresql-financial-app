import { Injectable } from '@nestjs/common';
import { CreateCatalogueDto } from './dto/create-catalogue.dto';
import { UpdateCatalogueDto } from './dto/update-catalogue.dto';

@Injectable()
export class CatalogueService {
  create(createCatalogueDto: CreateCatalogueDto) {
    return 'This action adds a new catalogue';
  }

  findAll() {
    return `This action returns all catalogue`;
  }

  findOne(id: number) {
    return `This action returns a #${id} catalogue`;
  }

  update(id: number, updateCatalogueDto: UpdateCatalogueDto) {
    return `This action updates a #${id} catalogue`;
  }

  remove(id: number) {
    return `This action removes a #${id} catalogue`;
  }
}
