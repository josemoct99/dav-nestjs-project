import { DataSource, Repository } from "typeorm";
import { ProjectEntity } from "../entities/project.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProjectRepository {
    private readonly instance: Repository<ProjectEntity>

    constructor(private readonly dataSource: DataSource) {
        this.instance = this.dataSource.getRepository(ProjectEntity);
    }

    public async findOne(name: string) {
        return await this.instance.findOne({ where: { name } })
    }

    public async findAll(){
        return await this.instance.find();
    }
}