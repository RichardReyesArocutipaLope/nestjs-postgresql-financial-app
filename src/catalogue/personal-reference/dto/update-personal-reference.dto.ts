import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonalReferenceDto } from './create-personal-reference.dto';

export class UpdatePersonalReferenceDto extends PartialType(CreatePersonalReferenceDto) {}
