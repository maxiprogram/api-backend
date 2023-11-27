import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

@Injectable()
export class SendMailService {
    private transporter: nodemailer.Transporter;
    public mailOptions: Mail.Options;

    constructor() {
      this.transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT),
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        }
      });

      this.mailOptions = {};
      this.mailOptions.from = process.env.SMTP_FROM;
      this.mailOptions.to = process.env.SMTP_TO;
      this.mailOptions.subject = 'Sending Email using Node.js';
    }

    sendMail(textMessage: string) {
      this.mailOptions.text = textMessage;

      return this.transporter.sendMail(this.mailOptions);
    }
}
