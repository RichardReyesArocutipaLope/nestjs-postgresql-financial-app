import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AvalesService } from './avales.service';
import { CreateAvalDto } from './dto/create-aval.dto';
import { UpdateAvalDto } from './dto/update-aval.dto';

@Controller('catalogue/avales')
export class AvalesController {
  constructor(private readonly avalesService: AvalesService) {}

  @Post()
  create(@Body() createAvaleDto: CreateAvalDto) {
    return this.avalesService.create(createAvaleDto);
  }

  @Get()
  findAll() {
    return this.avalesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avalesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAvaleDto: UpdateAvalDto) {
    return this.avalesService.update(+id, updateAvaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.avalesService.remove(+id);
  }
}
