import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonalReferenceService } from './personal-reference.service';
import { CreatePersonalReferenceDto } from './dto/create-personal-reference.dto';
import { UpdatePersonalReferenceDto } from './dto/update-personal-reference.dto';

@Controller('catalogue/personal-reference')
export class PersonalReferenceController {
  constructor(private readonly personalReferenceService: PersonalReferenceService) {}

  @Post()
  create(@Body() createPersonalReferenceDto: CreatePersonalReferenceDto) {
    return this.personalReferenceService.create(createPersonalReferenceDto);
  }

  @Get()
  findAll() {
    return this.personalReferenceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personalReferenceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonalReferenceDto: UpdatePersonalReferenceDto) {
    return this.personalReferenceService.update(+id, updatePersonalReferenceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personalReferenceService.remove(+id);
  }
}
