import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { hash, compare } from 'bcrypt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService) {
    }

    async loginUser(loginUserDto: LoginUserDto): Promise<User> {
        const user = await this.userService.getUserByLogin(loginUserDto.login)

        if (!user) {
            throw new HttpException("Login not found", HttpStatus.BAD_REQUEST);
        }

        await this.verifyPassword(loginUserDto.password, user.password)

        return user
    }

    async registerUser(registerUserDto: CreateUserDto): Promise<User> {
        const hashPass = await hash(registerUserDto.password, 10)

        return await this.userService.create({
            ...registerUserDto,
            password: hashPass
        })
    }

    async verifyPassword(inputPassword: string, hashPassword: string): Promise<void> {
        const res = await compare(inputPassword, hashPassword)

        if (!res) {
            throw new HttpException("Invalid password", HttpStatus.BAD_REQUEST);
        }
    }
}