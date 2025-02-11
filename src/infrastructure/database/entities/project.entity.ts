import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { UserEntity } from "./user.entity";
import { TaskEntity } from "./task.entity";


@Entity({ name: "project" })
export class ProjectEntity {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "title" })
  title: string;

  @Column({ name: "start_date" })
  startDate: Date;

  @Column({ name: "end_date" })
  endDate: Date;

  @ManyToOne(() => UserEntity, (user) => user.projects, { onDelete: "CASCADE" })
  user: UserEntity;

  @OneToMany(() => TaskEntity, (task) => task.project)
  tasks: TaskEntity[];
}
