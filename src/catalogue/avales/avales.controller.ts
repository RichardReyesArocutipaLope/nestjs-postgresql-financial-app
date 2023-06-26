import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AvalesService } from './avales.service';
import { CreateAvalDto } from './dto/create-aval.dto';
import { UpdateAvalDto } from './dto/update-aval.dto';
import { Auth, GetUser } from 'src/auth/users/decorators';
import { User } from 'src/auth/users/entities/user.entity';
import { ValidRoles } from 'src/auth/users/interfaces/valid-roles';

@Controller('catalogue/avales')
export class AvalesController {
  constructor(private readonly avalesService: AvalesService) { }

  @Post()
  @Auth(ValidRoles.administrador, ValidRoles.analista)
  create(@Body() createAvaleDto: CreateAvalDto, @GetUser() user: User) {
    return this.avalesService.create(createAvaleDto, user);
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
