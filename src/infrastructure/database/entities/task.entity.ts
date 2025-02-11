import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { ProjectEntity } from "./project.entity";


@Entity({ name: "task" })
export class TaskEntity {
    
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "description" })
  description: string;

  @Column({ name: "completed", default: false })
  completed: boolean;

  @ManyToOne(() => ProjectEntity, (project) => project.tasks, { onDelete: "CASCADE" })
  project: ProjectEntity;
}
