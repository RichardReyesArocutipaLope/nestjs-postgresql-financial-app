import { Module } from '@nestjs/common';
import { HousingTypeService } from './housing-type.service';
import { HousingTypeController } from './housing-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HousingType } from './entities/housing-type.entity';

@Module({
  controllers: [HousingTypeController],
  providers: [HousingTypeService],
  imports: [
    TypeOrmModule.forFeature(
      [ HousingType])
  ]
})
export class HousingTypeModule {}
