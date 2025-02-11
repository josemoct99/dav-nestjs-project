import { Injectable } from "@nestjs/common";
import { IProject } from "../../modules/project/domain/project";
import { ProjectEntity } from "../database/entities/project.entity";
import { CreateProjectDto } from "../../modules/project/presentation/dto/create-project.dto";
import { UpdateProjectDto } from "../../modules/project/presentation/dto/update-project.dto";

@Injectable()
export class ProjectMapper {

    mapToDomain(project: ProjectEntity): IProject {
        return {
            id: project.id,
            title: project.title,
            startDate: project.startDate,
            endDate: project.endDate
        } as IProject
    }

    mapToEntity(project: CreateProjectDto): ProjectEntity {
        return {
            title: project.title,
            startDate: project.startDate,
            endDate: project.endDate,
        } as ProjectEntity;
    }
}