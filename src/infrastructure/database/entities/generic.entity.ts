import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'generic'})
export class GenericEntity{

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({name: 'name'})
    name:string 
}