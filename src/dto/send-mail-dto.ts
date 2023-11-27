import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class SendMailDto {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    subject: string;
  
    @IsEmail()
    @IsNotEmpty()
    from: string;

    @IsString()
    @IsNotEmpty()
    textMessage: string;
}