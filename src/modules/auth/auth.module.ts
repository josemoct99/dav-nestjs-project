import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('config.accessTokenSecret'),
        global: true,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [AuthService],
})
export class AuthModule {}
