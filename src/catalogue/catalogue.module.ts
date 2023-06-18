import { Module } from '@nestjs/common';
import { AvalesModule } from './avales/avales.module';
import { BusinessModule } from './business/business.module';
import { CivilStatusModule } from './civil-status/civil-status.module';
import { CustomersModule } from './customers/customers.module';
import { EmployeesModule } from './employees/employees.module';
import { HousingTypeModule } from './housing-type/housing-type.module';
import { PersonalReferenceModule } from './personal-reference/personal-reference.module';

@Module({
  imports: [AvalesModule, BusinessModule, CivilStatusModule, CustomersModule, EmployeesModule, HousingTypeModule, PersonalReferenceModule],
  exports: [AvalesModule, BusinessModule, CivilStatusModule, CustomersModule, EmployeesModule, HousingTypeModule, PersonalReferenceModule]
})
export class CatalogueModule {}
