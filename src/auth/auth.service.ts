import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService) {
    }

    async registerUser(registerUserDto: CreateUserDto): Promise<User> {
        return await this.userService.create(registerUserDto) as any
    }
}
