import { Module } from '@nestjs/common';
import { AvalesService } from './avales.service';
import { AvalesController } from './avales.controller';
import { Aval } from './entities/aval.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [AvalesController],
  providers: [AvalesService],
  imports: [
    TypeOrmModule.forFeature(
      [ Aval])
  ]
})
export class AvalesModule {}
