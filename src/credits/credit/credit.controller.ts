import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CreditService } from './credit.service';
import { CreateCreditDto } from './dto/create-credit.dto';
import { UpdateCreditDto } from './dto/update-credit.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { FilterCreditDto } from './dto/filter-credit.dto';
import { Auth, GetUser } from 'src/auth/users/decorators';
import { ValidRoles } from 'src/auth/users/interfaces/valid-roles';
import { User } from 'src/auth/users/entities/user.entity';

@Controller('credits/credit')
export class CreditController {
  constructor(private readonly creditsService: CreditService) { }

  @Post()
  @Auth(ValidRoles.analista)
  create( @Body() createCreditDto: CreateCreditDto, @GetUser() user: User) {
    return this.creditsService.create(createCreditDto, user);
  }

  @Get()
  @Auth(ValidRoles.analista, ValidRoles.administrador, ValidRoles.cajero)
  findAll(@Query() paginationDto: PaginationDto, @Body() filterCreditDto: FilterCreditDto) {
    return this.creditsService.findAll(paginationDto, filterCreditDto);
  }

  @Get(':id')
  @Auth(ValidRoles.analista, ValidRoles.administrador, ValidRoles.cajero)
  findOne(@Param('id') id: string) {
    return this.creditsService.findOne(+id);
  }

  @Patch(':id')
  @Auth(ValidRoles.analista)
  update( @Param('id') id: string, @Body() updateCreditDto: UpdateCreditDto, @GetUser() user: User ) {
    return this.creditsService.update(+id, updateCreditDto, user);
  }

  @Delete(':id')
  @Auth(ValidRoles.administrador)
  remove(@Param('id') id: string, @GetUser() user: User,) {
    return this.creditsService.remove(+id, user);
  }

  @Patch('approve/:id')
  @Auth(ValidRoles.administrador)
  approve(@Param('id') id: string, @GetUser() user: User,) {
    return this.creditsService.approve(+id, user);
  }

  @Patch('disburse/:id')
  @Auth(ValidRoles.cajero, ValidRoles.administrador)
  disburse(@Param('id') id: string, @GetUser() user: User,) {
    return this.creditsService.disburse(+id, user);
  }

}
