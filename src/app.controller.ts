import { Controller, Get, HttpException, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SendMailService } from './send-mail-service/send-mail-service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly sendMailService: SendMailService)
    {

    }

  @Get()
  index(): string {
    return 'This is API!';
  }

  @Get('send-mail')
  async sendMail() {

    console.log('Start send-mail');

    let result = await this.sendMailService.sendMail('test message');
    //console.log(result);
    
    console.log('End send-mail');

    return {status: 'ok'};
  }

}
