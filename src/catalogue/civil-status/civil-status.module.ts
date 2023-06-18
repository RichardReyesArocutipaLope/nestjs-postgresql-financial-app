import { Module } from '@nestjs/common';
import { CivilStatusService } from './civil-status.service';
import { CivilStatusController } from './civil-status.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CivilStatus } from './entities/civil-status.entity';

@Module({
  controllers: [CivilStatusController],
  providers: [CivilStatusService],
  imports: [
    TypeOrmModule.forFeature(
      [ CivilStatus])
  ]
})
export class CivilStatusModule {}
