import { CanActivate, ExecutionContext, Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Roles } from '../../../shared/decorators/roles.decorator';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly reflector: Reflector,
    private readonly authService: AuthService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const roles = this.reflector.get(Roles, context.getHandler());
    const bearerToken = this.authService.extractTokenFromHeader(request);


    if (!bearerToken) {
      Logger.error(
        'Error:AuthGuard: No token provided'
      );
      throw new UnauthorizedException('No token provided');
    }

    try {
      const payload = await this.jwtService.verifyAsync(bearerToken, {
        secret: this.configService.get<string>('config.jwtSecret'),
      });

      const personRole = payload.person.role;

      return roles.some(role => role === personRole);
    } catch (error) {
      Logger.error('Error:AuthGuard: Unauthorized:', error.message);
      throw new UnauthorizedException('Error authorizing');
    }
  }
}

