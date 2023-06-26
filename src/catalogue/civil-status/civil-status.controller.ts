import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CivilStatusService } from './civil-status.service';
import { CreateCivilStatusDto } from './dto/create-civil-status.dto';
import { UpdateCivilStatusDto } from './dto/update-civil-status.dto';
import { Auth, GetUser } from 'src/auth/users/decorators';
import { User } from 'src/auth/users/entities/user.entity';
import { ValidRoles } from 'src/auth/users/interfaces/valid-roles';

@Controller('catalogue/civil-status')
export class CivilStatusController {
  constructor(private readonly civilStatusService: CivilStatusService) { }

  @Post()
  @Auth(ValidRoles.administrador)
  create(@Body() createCivilStatusDto: CreateCivilStatusDto, @GetUser() user: User) {
    return this.civilStatusService.create(createCivilStatusDto, user);
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
