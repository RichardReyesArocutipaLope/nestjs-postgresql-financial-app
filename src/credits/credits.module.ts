import { Module } from '@nestjs/common';
import { CreditModule } from './credit/credit.module';
import { FinancialInterestRateModule } from './financial-interest-rate/financial-interest-rate.module';
import { PeriodTypeModule } from './period-type/period-type.module';

@Module({
  imports: [CreditModule, FinancialInterestRateModule, PeriodTypeModule]
})
export class CreditsModule {}
