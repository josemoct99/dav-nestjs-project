import { Injectable } from "@nestjs/common";
import { ProjectPort } from "../../../infrastructure/ports/project.port";

@Injectable()
export class Project {

    constructor(private projectPort: ProjectPort){}

    instantiate(name:string){
        const projectCreated = this.projectPort 
    }
}
