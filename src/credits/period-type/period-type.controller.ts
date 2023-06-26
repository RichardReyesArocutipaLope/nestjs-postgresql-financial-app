import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PeriodTypeService } from './period-type.service';
import { CreatePeriodTypeDto } from './dto/create-period-type.dto';
import { UpdatePeriodTypeDto } from './dto/update-period-type.dto';
import { ValidRoles } from 'src/auth/users/interfaces/valid-roles';
import { Auth, GetUser } from 'src/auth/users/decorators';
import { User } from 'src/auth/users/entities/user.entity';

@Controller('credits/period-type')
export class PeriodTypeController {
  constructor(private readonly periodTypeService: PeriodTypeService) { }

  @Post()
  @Auth(ValidRoles.administrador)
  create(@Body() createPeriodTypeDto: CreatePeriodTypeDto, @GetUser() user: User) {
    return this.periodTypeService.create(createPeriodTypeDto, user);
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
