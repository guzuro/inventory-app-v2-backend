import { Body, ClassSerializerInterceptor, Controller, Post, UseInterceptors } from '@nestjs/common';
import { HttpExceptionFilter } from '../filters/http-exception.filter';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../users/entities/user.entity';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('signIn')
  async signIn(@Body() loginUserDto: LoginUserDto): Promise<User> {
    return await this.authService.loginUser(loginUserDto)
  }

  @Post('signUp')
  async signUp(@Body() registerUserDto: CreateUserDto): Promise<User> {
    return await this.authService.registerUser(registerUserDto)
  }

}
