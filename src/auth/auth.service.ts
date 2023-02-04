import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService) {
    }

    async registerUser(registerUserDto: CreateUserDto):Promise<User> {
        return this.userService.create(registerUserDto)
    }
}
