import { Module } from '@nestjs/common';
import { CreditService } from './credit.service';
import { CreditController } from './credit.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Credit } from './entities/credit.entity';
import { CustomersModule } from 'src/catalogue/customers/customers.module';
import { BusinessModule } from 'src/catalogue/business/business.module';
import { AvalesModule } from 'src/catalogue/avales/avales.module';
import { PersonalReferenceModule } from 'src/catalogue/personal-reference/personal-reference.module';

@Module({
  controllers: [CreditController],
  providers: [CreditService],
  imports: [
    TypeOrmModule.forFeature([Credit]),
    CustomersModule,
    BusinessModule,
    AvalesModule,
    PersonalReferenceModule
  ],
  exports: [
    CreditService,
    TypeOrmModule,
  ]
})
export class CreditModule { }
