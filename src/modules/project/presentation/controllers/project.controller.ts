import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, UseGuards } from '@nestjs/common';
import { ProjectService } from '../../application/services/project.service';
import { CreateProjectDto } from '../dto/create-project.dto';
import { UpdateProjectDto } from '../dto/update-project.dto';
import { ResponseProjectDto } from '../dto/response-project.dto';
import { Response } from 'express';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';
import { Roles } from 'src/shared/decorators/roles.decorator';
import { UserRole } from 'src/modules/user/domain/user.role';

@Controller('project')
export class ProjectController {

  constructor(
    private readonly projectService: ProjectService
  ) { }

  @Post()
  create(@Body() createProjectDto: CreateProjectDto): Promise<ResponseProjectDto> {
    return this.projectService.create(createProjectDto);
  }

  @Get()
  async findAll(): Promise<ResponseProjectDto[]> {
    return await this.projectService.findAllProjects();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.projectService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto): Promise<ResponseProjectDto> {
    return this.projectService.update(id, updateProjectDto);
  }

  @UseGuards(AuthGuard)
  @Roles([UserRole.ADMIN])
  @Delete(':id')
  async remove(@Res() response: Response, @Param('id') id: string) {
    const { isDeleted } = await this.projectService.remove(id);
    if (isDeleted) {
      response.status(HttpStatus.NO_CONTENT).send();
    } else {
      response.status(HttpStatus.NOT_FOUND).send();
    }
  }
}
