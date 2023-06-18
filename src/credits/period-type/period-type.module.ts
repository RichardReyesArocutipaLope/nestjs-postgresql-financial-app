import { Module } from '@nestjs/common';
import { PeriodTypeService } from './period-type.service';
import { PeriodTypeController } from './period-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeriodType } from './entities/period-type.entity';

@Module({
  controllers: [PeriodTypeController],
  providers: [PeriodTypeService],
  imports: [
    TypeOrmModule.forFeature(
      [ PeriodType])
  ]
})
export class PeriodTypeModule {}
