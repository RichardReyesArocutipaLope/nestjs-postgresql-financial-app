import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PeriodTypeService } from './period-type.service';
import { CreatePeriodTypeDto } from './dto/create-period-type.dto';
import { UpdatePeriodTypeDto } from './dto/update-period-type.dto';

@Controller('credits/period-type')
export class PeriodTypeController {
  constructor(private readonly periodTypeService: PeriodTypeService) {}

  @Post()
  create(@Body() createPeriodTypeDto: CreatePeriodTypeDto) {
    return this.periodTypeService.create(createPeriodTypeDto);
  }

  @Get()
  findAll() {
    return this.periodTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.periodTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePeriodTypeDto: UpdatePeriodTypeDto) {
    return this.periodTypeService.update(+id, updatePeriodTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.periodTypeService.remove(+id);
  }
}
