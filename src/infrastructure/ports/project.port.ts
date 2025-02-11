import { Injectable } from "@nestjs/common";
import { ProjectRepository } from '../database/repositories/project.repository';
import { IProject } from "../../modules/project/domain/project";
import { CreateProjectDto } from "../../modules/project/presentation/dto/create-project.dto";
import { UpdateProjectDto } from "../../modules/project/presentation/dto/update-project.dto";
import { ProjectMapper } from "../mappers/project.mapper";
import { ProjectEntity } from '../database/entities/project.entity';

export const PROJECT_PORT_TOKEN = 'project_port_token';

export class IProjectPort {
    findAllProjects: () => Promise<IProject[]>;
    findProject: (id: string) => Promise<IProject>;
    createProject: (createProjectDto: CreateProjectDto) => Promise<IProject>;
    updateProject: (id:string, updateProjectDto: UpdateProjectDto) => Promise<IProject>;
    deleteProject: (id: string) => Promise<boolean>;
}

@Injectable()
export class ProjectPort implements IProjectPort {

    constructor(
        private readonly projectRepository: ProjectRepository,
        private readonly projectMapper: ProjectMapper
    ) { }

    async findAllProjects(): Promise<IProject[]> {
        return await this.projectRepository.findAll();
    }

    async findProject(id: string): Promise<IProject> {
        const projectEntity = await this.projectRepository.findOne(id);
        if(!projectEntity){
            throw new Error('Project not found');
        }
        const projectDomain = this.projectMapper.mapToDomain(projectEntity);
        return projectDomain;
    }

    async createProject(createProjectDto: CreateProjectDto): Promise<IProject> {
        const projectEntityToCreate: ProjectEntity = this.projectMapper.mapToEntity(createProjectDto);
        const projectEntityCreated = await this.projectRepository.saveOrUpdate(projectEntityToCreate);
        if(!projectEntityCreated){
            throw new Error('Project not created');
        }
        const projectDomain = this.projectMapper.mapToDomain(projectEntityCreated);
        return projectDomain;
    }

    async updateProject(id:string, updateProjectDto: UpdateProjectDto): Promise<IProject> {
        const projectEntityFound = await this.projectRepository.findOne(id);
        if(!projectEntityFound){
            throw new Error('Project not found');
        }
        projectEntityFound.startDate = updateProjectDto.startDate || projectEntityFound.startDate;
        projectEntityFound.endDate = updateProjectDto.endDate || projectEntityFound.endDate;
        projectEntityFound.title = updateProjectDto.title || projectEntityFound.title;

        const projectEntityUpdated = await this.projectRepository.saveOrUpdate(projectEntityFound);
        if(!projectEntityUpdated){
            throw new Error('Project can not be updated');
        }
        const projectUpdatedDomain = this.projectMapper.mapToDomain(projectEntityUpdated);
        return projectUpdatedDomain;
    }

    async deleteProject(id: string): Promise<boolean> {
        const deletedResult = await this.projectRepository.delete(id);
        const isDeleted = deletedResult.affected != 0 ? true : false;
        return isDeleted;
    }


}