import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from '../../presentation/dto/create-project.dto';
import { UpdateProjectDto } from '../../presentation/dto/update-project.dto';
import { Project } from '../../domain/project';
import { ProjectPort } from '../../../../infrastructure/ports/project.port';

@Injectable()
export class ProjectService {

  constructor(
    private readonly project: Project,
    private readonly projectPort: ProjectPort
  ) { }


  create(createprojectDto: CreateProjectDto) {
    return 'This action adds a new project';
  }

  async findAll() {
    return await this.projectPort.findAllProjects();
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateprojectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
