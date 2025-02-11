import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from '../../presentation/dto/create-project.dto';
import { UpdateProjectDto } from '../../presentation/dto/update-project.dto';
import { Project } from '../../domain/project';
import { ProjectPort } from '../../../../infrastructure/ports/project.port';
import { ResponseProjectDto } from '../../presentation/dto/response-project.dto';
import { ResponseDeleteProjectDto } from '../../presentation/dto/response-delete-project.dto';

@Injectable()
export class ProjectService {

  constructor(
    private readonly project: Project,
    private readonly projectPort: ProjectPort
  ) { }

  async findAllProjects(): Promise<ResponseProjectDto[]>  {
    const projects = await this.projectPort.findAllProjects();
    const responseProjects: ResponseProjectDto[] = [];
    projects.forEach(p => {
      responseProjects.push(new ResponseProjectDto(p.id, p.title, p.startDate, p.endDate));
    });
    return responseProjects;
  }

  async create(createprojectDto: CreateProjectDto): Promise<ResponseProjectDto> {
    const projectDomain = await this.project.instantiate(createprojectDto);
    const { id, title, startDate, endDate } = projectDomain;
    return new ResponseProjectDto(id, title, startDate, endDate);
  }

  async findOne(projectId: string): Promise<ResponseProjectDto> {
    const projectDomain = await this.project.find(projectId);
    const { id, title, startDate, endDate } = projectDomain;
    return new ResponseProjectDto(id, title, startDate, endDate);
  }

  async update(projectId: string, updateprojectDto: UpdateProjectDto): Promise<ResponseProjectDto> {
    const projectDomain = await this.project.update(projectId, updateprojectDto);
    const { id, title, startDate, endDate } = projectDomain;
    return new ResponseProjectDto(id, title, startDate, endDate);
  }

  async remove(id: string): Promise<ResponseDeleteProjectDto> {
    const isDeleted = await this.project.delete(id);
    return {
      isDeleted
    }
  }
}
