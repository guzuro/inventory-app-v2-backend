import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from '../filters/http-exception.filter';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../users/entities/user.entity';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('signIn')
  signIn(@Body() loginUserDto: LoginUserDto): string {
    return 'sign in method'
  }

  @Post('signUp')
  async signUp(@Body() registerUserDto: CreateUserDto): Promise<User> {
    return await this.authService.registerUser(registerUserDto)
  }

}
