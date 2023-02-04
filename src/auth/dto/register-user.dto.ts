import { IsEmail, IsNotEmpty, Min } from 'class-validator';

export class RegisterUserDto {
    @IsNotEmpty()
    login: string;
  
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Min(6)
    password: string;
}
