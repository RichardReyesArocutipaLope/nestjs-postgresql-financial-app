import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CashAccountService } from './cash-account.service';
import { CreateCashAccountDto } from './dto/create-cash-account.dto';
import { UpdateCashAccountDto } from './dto/update-cash-account.dto';

@Controller('cash-account')
export class CashAccountController {
  constructor(private readonly cashAccountService: CashAccountService) {}

  @Post()
  create(@Body() createCashAccountDto: CreateCashAccountDto) {
    return this.cashAccountService.create(createCashAccountDto);
  }

  @Get()
  findAll() {
    return this.cashAccountService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cashAccountService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCashAccountDto: UpdateCashAccountDto) {
    return this.cashAccountService.update(+id, updateCashAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cashAccountService.remove(+id);
  }
}
