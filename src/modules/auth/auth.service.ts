import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { UserRole } from '../user/domain/user.role';
import { UserPort } from '../../infrastructure/ports/user.port';
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userPort: UserPort,
  ) {}

  public extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

  public async decodeToken(token): Promise<UserRole | null> {
    const decoded = this.jwtService.verify(token);
    return decoded;
  }

  async validateUser(email: string, password: string): Promise<string> {
    const user = await this.userPort.authenticateUser(email,password);

    if (!user) {
      throw new UnauthorizedException("Incorrect credentials");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException("Credenciales incorrectas");
    }

    const payload = { id: user.id, role: user.role };
    return this.jwtService.sign(payload);
  }


}