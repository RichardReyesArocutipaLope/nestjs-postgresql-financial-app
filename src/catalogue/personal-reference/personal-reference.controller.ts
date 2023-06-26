import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonalReferenceService } from './personal-reference.service';
import { CreatePersonalReferenceDto } from './dto/create-personal-reference.dto';
import { UpdatePersonalReferenceDto } from './dto/update-personal-reference.dto';
import { Auth, GetUser } from 'src/auth/users/decorators';
import { ValidRoles } from 'src/auth/users/interfaces/valid-roles';
import { User } from 'src/auth/users/entities/user.entity';

@Controller('catalogue/personal-reference')
export class PersonalReferenceController {
  constructor(private readonly personalReferenceService: PersonalReferenceService) {}

  @Post()
  @Auth(ValidRoles.administrador, ValidRoles.analista)
  create(@Body() createPersonalReferenceDto: CreatePersonalReferenceDto, @GetUser() user: User) {
    return this.personalReferenceService.create(createPersonalReferenceDto, user);
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
