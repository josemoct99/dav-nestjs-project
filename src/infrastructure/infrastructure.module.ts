import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresTypeOrmConfigService } from './config/postgres-type-orm-config.service';
import { GenericPort } from './ports/generic.port';
import { GenericRepository } from './database/repositories/generic.repository';

@Global()
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useClass: PostgresTypeOrmConfigService
        })
    ],
    providers: [
        GenericPort,
        GenericRepository
    ],
    exports: [
        GenericPort
    ]
})
export class InfrastructureModule { }
