import { Inject, Injectable } from "@nestjs/common";
import { UserRole } from "./user.role";
import { IProject } from "../../../modules/project/domain/project";
import { UserPort } from "../../../infrastructure/ports/user.port";
import { CreateUserDto } from "../presentation/dto/create-user.dto";

export interface IUser {

    id: string;

    name: string;

    email: string;

    role: UserRole;

    password: string;

    projects: IProject[];

}

@Injectable()
export class User implements IUser {

    @Inject() private userPort: UserPort;


    id: string;
    name: string;
    email: string;
    role: UserRole;
    password: string;
    projects: IProject[];

    async instantiate(createUserDto: CreateUserDto) {
        const projectCreated = await this.userPort.createUser(createUserDto);
        this.id = projectCreated.id;
        this.email = projectCreated.email;
        this.name = projectCreated.name;
        this.role = projectCreated.role;
        this.password = projectCreated.password;
        return this;
    }


}
