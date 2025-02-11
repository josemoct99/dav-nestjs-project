import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';
import './shared/config/dotenv.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const configService = app.get(ConfigService);

  await app.listen(configService.get<number>('config.port') ?? 3000, '0.0.0.0', () => {
    Logger.log( 
      null,
      'main.ts',
      `app listening at ${configService.get<number>('config.port')} with env ${configService.get<number>(
        'config.environment'
      )}`
    );
  });
}

bootstrap();