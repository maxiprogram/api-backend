import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SendMailService } from './send-mail-service/send-mail-service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true})],
  controllers: [AppController],
  providers: [AppService, SendMailService],
})
export class AppModule {}
