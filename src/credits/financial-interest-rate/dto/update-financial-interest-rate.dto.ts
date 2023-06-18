import { PartialType } from '@nestjs/mapped-types';
import { CreateFinancialInterestRateDto } from './create-financial-interest-rate.dto';

export class UpdateFinancialInterestRateDto extends PartialType(CreateFinancialInterestRateDto) {}
