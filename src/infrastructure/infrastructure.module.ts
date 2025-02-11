import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresTypeOrmConfigService } from './config/postgres-type-orm-config.service';
import { ProjectPort } from './ports/project.port';
import { ProjectRepository } from './database/repositories/project.repository';
import { ProjectMapper } from './mappers/project.mapper';
import { UserPort } from './ports/user.port';
import { UserMapper } from './mappers/user.mapper';
import { UserRepository } from './database/repositories/user.repository';

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
        ProjectRepository,
        ProjectMapper,
        UserPort,
        UserRepository,
        UserMapper
    ],
    exports: [
        ProjectPort,
        UserPort
    ]
})
export class InfrastructureModule { }
