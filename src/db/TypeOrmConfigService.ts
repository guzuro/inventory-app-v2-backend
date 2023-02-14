import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "../users/entities/user.entity";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
    constructor(private config: ConfigService) {
        console.log(this.createTypeOrmOptions());

    }


    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: this.config.get('POSTGRES_HOST'),
            port: +this.config.get('POSTGRES_PORT'),
            username: this.config.get('POSTGRES_USER'),
            password: this.config.get('POSTGRES_PASSWORD'),
            database: this.config.get('POSTGRES_NAME'),
            entities: [User],
            synchronize: true,
        };
    }
}