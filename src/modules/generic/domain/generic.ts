import { Injectable } from "@nestjs/common";
import { GenericPort } from "../../../infrastructure/ports/generic.port";

@Injectable()
export class Generic {

    constructor(private genericPort: GenericPort){}

    instantiate(name:string){
        const genericCreated = this.genericPort 
    }
}
