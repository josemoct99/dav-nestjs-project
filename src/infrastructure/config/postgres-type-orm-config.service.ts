import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import TypeormConfig from "../../shared/config/typeorm.config";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PostgresTypeOrmConfigService implements TypeOrmOptionsFactory{

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return TypeormConfig as TypeOrmModuleOptions;
    }
}