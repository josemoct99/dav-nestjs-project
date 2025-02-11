import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'project'})
export class ProjectEntity{

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({name: 'name'})
    name:string 
}