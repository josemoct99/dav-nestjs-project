import { IsNotEmpty } from "class-validator";
import { UserRole } from "../../domain/user.role";

export class CreateUserDto {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    role: UserRole;
}
