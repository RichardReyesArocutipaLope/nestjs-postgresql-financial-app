import { PartialType } from '@nestjs/mapped-types';
import { CreateReceivableDto } from './create-receivable.dto';

export class UpdateReceivableDto extends PartialType(CreateReceivableDto) {}
