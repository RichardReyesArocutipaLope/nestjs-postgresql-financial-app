import { PartialType } from '@nestjs/mapped-types';
import { CreateCivilStatusDto } from './create-civil-status.dto';

export class UpdateCivilStatusDto extends PartialType(CreateCivilStatusDto) {}
