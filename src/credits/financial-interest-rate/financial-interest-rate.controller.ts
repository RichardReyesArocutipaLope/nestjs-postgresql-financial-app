import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FinancialInterestRateService } from './financial-interest-rate.service';
import { CreateFinancialInterestRateDto } from './dto/create-financial-interest-rate.dto';
import { UpdateFinancialInterestRateDto } from './dto/update-financial-interest-rate.dto';
import { Auth, GetUser } from 'src/auth/users/decorators';
import { User } from 'src/auth/users/entities/user.entity';
import { ValidRoles } from 'src/auth/users/interfaces/valid-roles';

@Controller('credits/financial-interest-rate')
export class FinancialInterestRateController {
  constructor(private readonly financialInterestRateService: FinancialInterestRateService) {}

  @Post()
  @Auth(ValidRoles.administrador)
  create(@Body() createFinancialInterestRateDto: CreateFinancialInterestRateDto, @GetUser() user: User) {
    return this.financialInterestRateService.create(createFinancialInterestRateDto, user);
  }

  @Get()
  @Auth()
  findAll() {
    return this.financialInterestRateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.financialInterestRateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFinancialInterestRateDto: UpdateFinancialInterestRateDto) {
    return this.financialInterestRateService.update(+id, updateFinancialInterestRateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.financialInterestRateService.remove(+id);
  }
}
