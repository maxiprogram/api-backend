import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  index(): string {
    return 'This is API!';
  }

  @Get('send-mail')
  sendMail() {
    return 'sendMail';
  }

}
