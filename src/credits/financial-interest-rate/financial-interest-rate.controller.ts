import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FinancialInterestRateService } from './financial-interest-rate.service';
import { CreateFinancialInterestRateDto } from './dto/create-financial-interest-rate.dto';
import { UpdateFinancialInterestRateDto } from './dto/update-financial-interest-rate.dto';

@Controller('credits/financial-interest-rate')
export class FinancialInterestRateController {
  constructor(private readonly financialInterestRateService: FinancialInterestRateService) {}

  @Post()
  create(@Body() createFinancialInterestRateDto: CreateFinancialInterestRateDto) {
    return this.financialInterestRateService.create(createFinancialInterestRateDto);
  }

  @Get()
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
