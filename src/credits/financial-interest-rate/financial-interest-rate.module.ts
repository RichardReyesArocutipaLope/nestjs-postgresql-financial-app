import { Module } from '@nestjs/common';
import { FinancialInterestRateService } from './financial-interest-rate.service';
import { FinancialInterestRateController } from './financial-interest-rate.controller';
import { FinancialInterestRate } from './entities/financial-interest-rate.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [FinancialInterestRateController],
  providers: [FinancialInterestRateService],
  imports: [
    TypeOrmModule.forFeature(
      [ FinancialInterestRate])
  ]
  
})
export class FinancialInterestRateModule {}
