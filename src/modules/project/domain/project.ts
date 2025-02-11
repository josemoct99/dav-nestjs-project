import { Inject, Injectable } from "@nestjs/common";
import { ProjectPort } from "../../../infrastructure/ports/project.port";
import { IUser } from "../../../modules/user/domain/user";
import { ITask } from "src/modules/task/domain/task";
import { CreateProjectDto } from "../presentation/dto/create-project.dto";
import { UpdateProjectDto } from "../presentation/dto/update-project.dto";

export interface IProject {
    id: string;
    title: string;
    startDate: Date;
    endDate: Date;
    user: IUser;
    tasks: ITask[];
}

@Injectable()
export class Project implements IProject {

    @Inject() private projectPort: ProjectPort;

    id: string;
    title: string;
    startDate: Date;
    endDate: Date;
    user: IUser;
    tasks: ITask[];

    async instantiate(createProjectDto: CreateProjectDto) {
        const projectCreated = await this.projectPort.createProject(createProjectDto);
        this.id = projectCreated.id;
        this.title = projectCreated.title;
        this.startDate = projectCreated.startDate;
        this.endDate = projectCreated.endDate;
        return this;
    }


    async update(id: string, updateProjectDto: UpdateProjectDto){
        const projectUpdated = await this.projectPort.updateProject(id, updateProjectDto);
        this.id = projectUpdated.id;
        this.title = projectUpdated.title;
        this.startDate = projectUpdated.startDate;
        this.endDate = projectUpdated.endDate;
        return this;
    }

    async delete(id: string){
        return await this.projectPort.deleteProject(id);
    }

    async find(id: string){
        const projectFound = await this.projectPort.findProject(id);
        this.id = projectFound.id;
        this.title = projectFound.title;
        this.startDate = projectFound.startDate;
        this.endDate = projectFound.endDate;
        return this;
    }


}
