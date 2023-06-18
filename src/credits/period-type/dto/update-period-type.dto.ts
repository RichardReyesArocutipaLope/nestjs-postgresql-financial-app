import { PartialType } from '@nestjs/mapped-types';
import { CreatePeriodTypeDto } from './create-period-type.dto';

export class UpdatePeriodTypeDto extends PartialType(CreatePeriodTypeDto) {}
