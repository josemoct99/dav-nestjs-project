import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresTypeOrmConfigService } from './config/postgres-type-orm-config.service';
import { ProjectPort } from './ports/project.port';
import { ProjectRepository } from './database/repositories/project.repository';

@Global()
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useClass: PostgresTypeOrmConfigService
        })
    ],
    providers: [
        ProjectPort,
        ProjectRepository
    ],
    exports: [
        ProjectPort
    ]
})
export class InfrastructureModule { }
