import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { CreditsModule } from 'src/credits/credits.module';
import { CatalogueModule } from 'src/catalogue/catalogue.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports:[CreditsModule, CatalogueModule]
})
export class SeedModule {}
