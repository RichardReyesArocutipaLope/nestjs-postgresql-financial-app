import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CivilStatusService } from './civil-status.service';
import { CreateCivilStatusDto } from './dto/create-civil-status.dto';
import { UpdateCivilStatusDto } from './dto/update-civil-status.dto';

@Controller('catalogue/civil-status')
export class CivilStatusController {
  constructor(private readonly civilStatusService: CivilStatusService) {}

  @Post()
  create(@Body() createCivilStatusDto: CreateCivilStatusDto) {
    return this.civilStatusService.create(createCivilStatusDto);
  }

  @Get()
  findAll() {
    return this.civilStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.civilStatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCivilStatusDto: UpdateCivilStatusDto) {
    return this.civilStatusService.update(+id, updateCivilStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.civilStatusService.remove(+id);
  }
}
