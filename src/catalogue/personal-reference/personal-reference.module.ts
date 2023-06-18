import { Module } from '@nestjs/common';
import { PersonalReferenceService } from './personal-reference.service';
import { PersonalReferenceController } from './personal-reference.controller';
import { PersonalReference } from './entities/personal-reference.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [PersonalReferenceController],
  providers: [PersonalReferenceService],
  imports: [
    TypeOrmModule.forFeature(
      [ PersonalReference])
  ],
  exports:[
    PersonalReferenceService,
    TypeOrmModule,
  ]
})
export class PersonalReferenceModule {}
