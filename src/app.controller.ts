import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SendMailService } from './send-mail-service/send-mail-service';
import { SendMailDto } from './dto/send-mail-dto';

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

  @Post('send-mail')
  async sendMail(@Body() body: SendMailDto) {

    Logger.log('Start send-mail', 'Route: send-mail');
    Logger.log(body, 'BODY');

    let result = await this.sendMailService.sendMail(body);
    //console.log(result);
    
    Logger.log('End send-mail', 'Route: send-mail');

    return {status: 'ok'};
  }

}
