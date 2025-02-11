import { Injectable } from "@nestjs/common";
import { IUser } from "../../modules/user/domain/user";
import { CreateUserDto } from "../../modules/user/presentation/dto/create-user.dto";
import { UserEntity } from "../database/entities/user.entity";
import { UserRepository } from "../database/repositories/user.repository";
import { UserMapper } from "../mappers/user.mapper";

export interface IUserPort {
    findUser: (id: string) => Promise<IUser>;
    createUser: (createUserDto: CreateUserDto) => Promise<IUser>;
}

@Injectable()
export class UserPort {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly userMapper: UserMapper
    ) { }

    async findUser(id: string): Promise<IUser> {
        const userEntity = await this.userRepository.findOne(id);
        if (!userEntity) {
            throw new Error('User not found');
        }
        const userDomain = this.userMapper.mapToDomain(userEntity);
        return userDomain;
    }

    async authenticateUser(email: string, password: string) {
        const userEntity = await this.userRepository.authenticate(email, password);
        if (!userEntity) {
            throw new Error('User not found');
        }
        const userDomain = this.userMapper.mapToDomain(userEntity);
        return userDomain;
    }

    async createUser(createUserDto: CreateUserDto): Promise<IUser> {
        const userEntityToCreate: UserEntity = this.userMapper.mapToEntity(createUserDto);
        const userEntityCreated = await this.userRepository.saveOrUpdate(userEntityToCreate);
        if (!userEntityCreated) {
            throw new Error('User not created');
        }
        const userDomain = this.userMapper.mapToDomain(userEntityCreated);
        return userDomain;
    }
}