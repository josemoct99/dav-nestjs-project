import { DataSource, Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { UserEntity } from "../entities/user.entity";


@Injectable()
export class UserRepository {

    private readonly instance: Repository<UserEntity>

    constructor(private readonly dataSource: DataSource) {
        this.instance = this.dataSource.getRepository(UserEntity);
    }

    public async findOne(id: string) {
        return await this.instance.findOne({ where: { id } })
    }

    public async authenticate(email: string, password: string){
        return await this.instance.findOne({
            where: { email },
            select: ["id", "password", "role"],
          });
    }

    public async findAll() {
        return await this.instance.find();
    }

    public async saveOrUpdate(User: UserEntity){
        return await this.instance.save(User);
    }

    public async delete(id: string){
        return await this.instance.delete({ id })
    }
}