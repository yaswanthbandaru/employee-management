import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, ManyToMany } from "typeorm";
import { Project } from "./Project";
import { Employee } from "./Employee";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    title: string 

    @Column()
    description: string 

    @Column({nullable: true})
    dueDate?: Date 

    @Column()
    priority: string 

    @Column()
    status: string 

    @ManyToOne(() => Project, (project) => project.tasks)
    project: Project 

    @ManyToMany(() => Employee, (employee) => employee.tasks)
    employees: Employee[]
}
