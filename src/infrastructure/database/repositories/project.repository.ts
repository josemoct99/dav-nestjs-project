import { DataSource, Repository } from "typeorm";
import { ProjectEntity } from "../entities/project.entity";
import { Injectable } from "@nestjs/common";
import { IProject } from "src/modules/project/domain/project";

@Injectable()
export class ProjectRepository {

    private readonly instance: Repository<ProjectEntity>

    constructor(private readonly dataSource: DataSource) {
        this.instance = this.dataSource.getRepository(ProjectEntity);
    }

    public async findOne(id: string) {
        return await this.instance.findOne({ where: { id } })
    }

    public async findAll() {
        return await this.instance.find();
    }

    public async saveOrUpdate(project: ProjectEntity){
        return await this.instance.save(project);
    }

    public async delete(id: string){
        return await this.instance.delete({ id })
    }
}