import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresTypeOrmConfigService } from '../../../infrastructure/config/postgres-type-orm-config.service';

@Global()
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useClass: PostgresTypeOrmConfigService
        })
    ]
})
export class InfrastructureModule {}
