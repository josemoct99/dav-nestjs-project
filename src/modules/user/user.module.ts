import { Module } from '@nestjs/common';
import { UserController } from './presentation/controllers/user.controller';
import { UserService } from './application/services/user.service';
import { User } from './domain/user';

@Module({
  controllers: [UserController],
  providers: [UserService, User],
})
export class UserModule {}
