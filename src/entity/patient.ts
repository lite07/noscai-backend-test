import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Schein } from "./schein"
import { ScheinReport } from "./scheinReport"

@Entity({name: "patients"})
export class Patient {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", length: 255, nullable: false})
    name: string

    @Column({ type: "date", name: "date_of_birth", nullable: false})
    dateOfBirth: Date

    @Column({ type: "varchar", name: "insurance_number", length: 255, nullable: true })
    insuranceNumber: string

    @Column({ type: "jsonb", default: {} })
    metadata: Record<string, any>

    @OneToMany(() => ScheinReport, (report) => report.patient)
    scheinReports: ScheinReport[]
}
