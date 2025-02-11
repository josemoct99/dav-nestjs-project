import { Injectable } from "@nestjs/common";
import { ProjectRepository } from '../database/repositories/project.repository';

@Injectable()
export class ProjectPort{

    constructor(private readonly projectRepository:ProjectRepository){}

    async findAllProjects(): Promise<any>{
        return await this.projectRepository.findAll();
    }

}