import { Module } from '@nestjs/common';
import { CreditService } from './credit.service';
import { CreditController } from './credit.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Credit } from './entities/credit.entity';

@Module({
  controllers: [CreditController],
  providers: [CreditService],
  imports: [
    TypeOrmModule.forFeature([Credit])
  ],
  exports: [
    CreditService,
    TypeOrmModule,
  ]
})
export class CreditModule { }
