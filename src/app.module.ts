import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { InfrastructureModule } from './src/infrastructure/infrastructure/infrastructure.module';
import appConfig from './shared/config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
      envFilePath: '.env'
    }),
    InfrastructureModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
