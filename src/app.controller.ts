import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import * as Nodemailer from 'nodemailer';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  index(): string {
    return 'This is API!';
  }

  @Get('send-mail')
  sendMail() {
    // let transporter = Nodemailer.createTransport('gmail', {
    //   auth: {
    //     user: 'youremail@gmail.com',
    //     pass: 'yourpassword'
    //   }
    // });

    let transporter = Nodemailer.createTransport();

    let mailOptions = {
      from: 'youremail@gmail.com',
      to: 'maxiprogram@gmail.com',
      subject: 'Sending Email using Node.js',
      text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    return 'sendMail';
  }

}
