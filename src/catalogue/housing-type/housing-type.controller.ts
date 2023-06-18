import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HousingTypeService } from './housing-type.service';
import { CreateHousingTypeDto } from './dto/create-housing-type.dto';
import { UpdateHousingTypeDto } from './dto/update-housing-type.dto';

@Controller('catalogue/housing-type')
export class HousingTypeController {
  constructor(private readonly housingTypeService: HousingTypeService) {}

  @Post()
  create(@Body() createHousingTypeDto: CreateHousingTypeDto) {
    return this.housingTypeService.create(createHousingTypeDto);
  }

  @Get()
  findAll() {
    return this.housingTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.housingTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHousingTypeDto: UpdateHousingTypeDto) {
    return this.housingTypeService.update(+id, updateHousingTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.housingTypeService.remove(+id);
  }
}
