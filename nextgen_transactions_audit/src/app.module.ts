import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RmqLoggerService } from './rmqlog.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [RmqLoggerService],
})
export class AppModule {}
