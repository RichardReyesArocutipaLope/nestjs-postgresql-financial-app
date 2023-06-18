import { Injectable } from '@nestjs/common';
import { CreateFinancialInterestRateDto } from './dto/create-financial-interest-rate.dto';
import { UpdateFinancialInterestRateDto } from './dto/update-financial-interest-rate.dto';

@Injectable()
export class FinancialInterestRateService {
  create(createFinancialInterestRateDto: CreateFinancialInterestRateDto) {
    return 'This action adds a new financialInterestRate';
  }

  findAll() {
    return `This action returns all financialInterestRate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} financialInterestRate`;
  }

  update(id: number, updateFinancialInterestRateDto: UpdateFinancialInterestRateDto) {
    return `This action updates a #${id} financialInterestRate`;
  }

  remove(id: number) {
    return `This action removes a #${id} financialInterestRate`;
  }
}
