import { Module } from '@nestjs/common';
import { CashAccountService } from './cash-account.service';
import { CashAccountController } from './cash-account.controller';

@Module({
  controllers: [CashAccountController],
  providers: [CashAccountService]
})
export class CashAccountModule {}
