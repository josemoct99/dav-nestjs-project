import { Injectable } from "@nestjs/common";
import { UserEntity } from "../database/entities/user.entity";
import { IUser } from "../../modules/user/domain/user";
import { CreateUserDto } from "../../modules/user/presentation/dto/create-user.dto";



@Injectable()
export class UserMapper {

    mapToDomain(user: UserEntity): IUser {
        return {
            id: user.id,
            email: user.email,
            name: user.name,
            password: user.password,
            role: user.role
        } as IUser
    }

    mapToEntity(user: CreateUserDto): UserEntity {
        return {
            email: user.email,
            name: user.name,
            password: user.password,
            role: user.role
        } as UserEntity;
    }
}