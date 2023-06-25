import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { CreditsModule } from 'src/credits/credits.module';
import { CatalogueModule } from 'src/catalogue/catalogue.module';
import { SecurityModule } from 'src/security/security.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports:[CreditsModule, CatalogueModule, SecurityModule, AuthModule]
})
export class SeedModule {}
