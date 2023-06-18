import { PartialType } from '@nestjs/mapped-types';
import { CreateAvalDto } from './create-aval.dto';

export class UpdateAvalDto extends PartialType(CreateAvalDto) {}
