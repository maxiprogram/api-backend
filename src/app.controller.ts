import { Body, Controller, Get, HttpCode, InternalServerErrorException, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SendMailService } from './send-mail-service/send-mail-service';
import { SendMailDto } from './dto/send-mail-dto';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';


@Controller('api')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly sendMailService: SendMailService,
    private readonly httpService: HttpService
    )
    {

    }

  @Get()
  index(): string {
    return 'This is API!';
  }

  @Post('send-mail')
  @HttpCode(200)
  async sendMail(@Body() body: SendMailDto) {

    Logger.log('Start send-mail', 'Route: send-mail');
    Logger.log(body, 'BODY');
    
    let response = await firstValueFrom(this.httpService.post('https://www.google.com/recaptcha/api/siteverify',
    {},
    {
      params: {
        secret: process.env.TOKEN_RECAPCH,
        response: body.responseToken
      },
    }));/*.subscribe((response) => {
      console.log('response', response.data);
    });*/

    console.log('response', response.data);
    if(response.data.success === true) {
      let result = await this.sendMailService.sendMail(body);
      console.log(result);
    } else {
      throw new InternalServerErrorException();
    }
    
    
    Logger.log('End send-mail', 'Route: send-mail');

    return {status: 'ok'};
  }

}
