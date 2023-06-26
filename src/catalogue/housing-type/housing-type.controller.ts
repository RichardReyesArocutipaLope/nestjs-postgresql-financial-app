import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HousingTypeService } from './housing-type.service';
import { CreateHousingTypeDto } from './dto/create-housing-type.dto';
import { UpdateHousingTypeDto } from './dto/update-housing-type.dto';
import { ValidRoles } from 'src/auth/users/interfaces/valid-roles';
import { Auth, GetUser } from 'src/auth/users/decorators';
import { User } from 'src/auth/users/entities/user.entity';

@Controller('catalogue/housing-type')
export class HousingTypeController {
  constructor(private readonly housingTypeService: HousingTypeService) {}

  @Post()
  @Auth(ValidRoles.administrador)
  create(@Body() createHousingTypeDto: CreateHousingTypeDto, @GetUser() user: User) {
    return this.housingTypeService.create(createHousingTypeDto, user);
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
