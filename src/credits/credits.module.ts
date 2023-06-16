import { Module } from '@nestjs/common';
import { CreditsService } from './credits.service';
import { CreditsController } from './credits.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Credit } from './entities/credit.entity';
import { PeriodType, FinancialInterestRate } from './entities';

@Module({
  controllers: [CreditsController],
  providers: [CreditsService],
  imports: [
    TypeOrmModule.forFeature([Credit,PeriodType,FinancialInterestRate])
  ]
})
export class CreditsModule { }
