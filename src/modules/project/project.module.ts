import { Module } from '@nestjs/common';
import { ProjectService } from './application/services/project.service';
import { ProjectController } from './presentation/controllers/project.controller';
import { Project } from './domain/project';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService, Project],
})
export class ProjectModule {}
