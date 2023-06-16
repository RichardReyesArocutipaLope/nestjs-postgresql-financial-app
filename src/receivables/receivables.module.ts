import { Module } from '@nestjs/common';
import { ReceivablesService } from './receivables.service';
import { ReceivablesController } from './receivables.controller';

@Module({
  controllers: [ReceivablesController],
  providers: [ReceivablesService]
})
export class ReceivablesModule {}
