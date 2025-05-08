import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SalesforceAuthService } from './salesforce-auth.service';
import { VaultAuthService } from './vault-auth.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [SalesforceAuthService,VaultAuthService],
})
export class AppModule {}
