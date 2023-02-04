import { IsEmail, IsNotEmpty, Min } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    login: string;
  
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Min(6)
    password: string;
}