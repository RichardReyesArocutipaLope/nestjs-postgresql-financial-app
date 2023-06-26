import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BusinessService } from './business.service';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { Auth, GetUser } from 'src/auth/users/decorators';
import { User } from 'src/auth/users/entities/user.entity';
import { ValidRoles } from 'src/auth/users/interfaces/valid-roles';

@Controller('catalogue/business')
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  @Post()
  @Auth(ValidRoles.administrador, ValidRoles.analista)
  create(@Body() createBusinessDto: CreateBusinessDto, @GetUser() user: User) {
    return this.businessService.create(createBusinessDto, user);
  }

  @Get()
  findAll() {
    return this.businessService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.businessService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBusinessDto: UpdateBusinessDto) {
    return this.businessService.update(+id, updateBusinessDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.businessService.remove(+id);
  }
}
