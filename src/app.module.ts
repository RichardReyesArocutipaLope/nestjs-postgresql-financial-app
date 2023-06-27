import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm'
import { SeedModule } from './seed/seed.module';
import { CatalogueModule } from './catalogue/catalogue.module';
import { CreditsModule } from './credits/credits.module';
import { CashAccountModule } from './cash-account/cash-account.module';
import { ReportsModule } from './reports/reports.module';
import { SecurityModule } from './security/security.module';
import { ReceivablesModule } from './receivables/receivables.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      ssl: process.env.STAGE === 'prod',
      extra: {
        ssl: process.env.STAGE === 'prod'
          ? { rejectUnauthorized: false }
          : null,
      },

      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),
    SeedModule,
    CatalogueModule,
    CreditsModule,
    CashAccountModule,
    ReportsModule,
    SecurityModule,
    ReceivablesModule,
    ConfigurationModule,
    AuthModule,
    CommonModule,
  ],
})
export class AppModule { }
