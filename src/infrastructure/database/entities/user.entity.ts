import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ProjectEntity } from "./project.entity";
import { UserRole } from "../../../modules/user/domain/user.role";


@Entity({ name: "user" })
export class UserEntity {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "name" })
  name: string;

  @Column({ name: "email" })
  email: string;

  @Column({
    type: "enum",
    enum: UserRole,
    name: "role"
  })
  role: UserRole;

  @Column({ name: "password", select: false })
  password: string;

  @OneToMany(() => ProjectEntity, (project) => project.user)
  projects: ProjectEntity[];
}
