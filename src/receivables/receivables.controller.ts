import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReceivablesService } from './receivables.service';
import { CreateReceivableDto } from './dto/create-receivable.dto';
import { UpdateReceivableDto } from './dto/update-receivable.dto';

@Controller('receivables')
export class ReceivablesController {
  constructor(private readonly receivablesService: ReceivablesService) {}

  @Post()
  create(@Body() createReceivableDto: CreateReceivableDto) {
    return this.receivablesService.create(createReceivableDto);
  }

  @Get()
  findAll() {
    return this.receivablesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.receivablesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReceivableDto: UpdateReceivableDto) {
    return this.receivablesService.update(+id, updateReceivableDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.receivablesService.remove(+id);
  }
}
