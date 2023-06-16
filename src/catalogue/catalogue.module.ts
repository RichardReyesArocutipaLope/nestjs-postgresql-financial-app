import { Module } from '@nestjs/common';
import { CatalogueService } from './catalogue.service';
import { CatalogueController } from './catalogue.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonalReference, HousingType, Employees, Customer, CivilStatus, Avales, Business } from './entities';

@Module({
  controllers: [CatalogueController],
  providers: [CatalogueService],
  imports: [
    TypeOrmModule.forFeature(
      [PersonalReference, HousingType, Employees, Customer, CivilStatus, Business, Avales])
  ]
})
export class CatalogueModule { }
