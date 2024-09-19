import { Entity, PrimaryGeneratedColumn, Column, Index, OneToMany } from "typeorm"
import { ScheinReport } from "./scheinReport"

@Entity({ name: "scheins" })
export class Schein {

    @PrimaryGeneratedColumn()
    id: number

    @Index()
    @Column({ type: "varchar", length: 255, nullable: false, unique: true })
    type: string

    @Column({ type: "varchar", length: 255, nullable: false })
    template: string

    @Column({ type: "jsonb", name: "validation_rules", default: {}})
    validationRules: Record<string, any>

    @OneToMany(() => ScheinReport, (report) => report.schein)
    scheinReports: ScheinReport[]
}
