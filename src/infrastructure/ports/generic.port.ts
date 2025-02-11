import { Injectable } from "@nestjs/common";
import { GenericRepository } from '../database/repositories/generic.repository';

@Injectable()
export class GenericPort{

    constructor(private readonly genericRepository:GenericRepository){}

    async findAllGenerics(): Promise<any>{
        return await this.genericRepository.findAll();
    }

}