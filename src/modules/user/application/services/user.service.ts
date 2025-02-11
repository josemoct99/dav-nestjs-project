import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../presentation/dto/create-user.dto';
import { User } from '../../domain/user';
import { UserPort } from '../../../../infrastructure/ports/user.port';
import { ResponseUserDto } from '../../presentation/dto/response-user.dto';


@Injectable()
export class UserService {

  constructor(
      private readonly user: User,
      private readonly userPort: UserPort
    ) { }

  async create(createUserDto: CreateUserDto): Promise<ResponseUserDto> {
    const userDomain = await this.user.instantiate(createUserDto);
    const { id, email, name, password,  } = userDomain;
    return new ResponseUserDto(id, name, email, password);
  }


  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

}
