import { PartialType } from '@nestjs/mapped-types';
import { CreateHousingTypeDto } from './create-housing-type.dto';

export class UpdateHousingTypeDto extends PartialType(CreateHousingTypeDto) {}
