import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { BusinessModule } from '../business/business.module';
import { CreditsModule } from 'src/credits/credits.module';
import { AvalesModule } from '../avales/avales.module';
import { PersonalReferenceModule } from '../personal-reference/personal-reference.module';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
  imports: [
    TypeOrmModule.forFeature([ Customer]),
    BusinessModule,
    CreditsModule,
    AvalesModule,
    PersonalReferenceModule
  ],
  exports:[
    CustomersService,
    TypeOrmModule,
  ]
})
export class CustomersModule {}
