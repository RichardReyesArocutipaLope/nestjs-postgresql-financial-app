import { PartialType } from '@nestjs/mapped-types';
import { CreateCatalogueDto } from './create-catalogue.dto';

export class UpdateCatalogueDto extends PartialType(CreateCatalogueDto) {}
