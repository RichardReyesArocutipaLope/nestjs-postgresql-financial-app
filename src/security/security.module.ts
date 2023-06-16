import { Module } from '@nestjs/common';
import { SecurityService } from './security.service';
import { SecurityController } from './security.controller';

@Module({
  controllers: [SecurityController],
  providers: [SecurityService]
})
export class SecurityModule {}
