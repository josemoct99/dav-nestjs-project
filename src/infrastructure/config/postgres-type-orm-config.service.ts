import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import TypeormConfig from "../../shared/config/typeorm.config";

export class PostgresTypeOrmConfigService implements TypeOrmOptionsFactory{

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return TypeormConfig as TypeOrmModuleOptions;
    }
}