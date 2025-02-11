import { DataSource, Repository } from "typeorm";
import { GenericEntity } from "../entities/generic.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class GenericRepository {
    private readonly instance: Repository<GenericEntity>

    constructor(private readonly dataSource: DataSource) {
        this.instance = this.dataSource.getRepository(GenericEntity);
    }

    public async findOne(name: string) {
        return await this.instance.findOne({ where: { name } })
    }

    public async findAll(){
        return await this.instance.find();
    }
}