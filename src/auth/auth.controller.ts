import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signIn')
  signIn(@Body() loginUserDto: LoginUserDto):string {
    return 'sign in method'
  }

  @Post('signUp')
  signUp(@Body() registerUserDto: RegisterUserDto):string {
    return 'signUp method'
  }

}
