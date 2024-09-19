import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Schein } from "./schein"
import { ScheinReport } from "./scheinReport"

@Entity({name: "doctors"})
export class Doctor {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", length: 255, nullable: false })
    name: string

    @Column({ type: "varchar", name: "doctor_number", length: 255, nullable: false })
    doctorNumber: string

    @Column({ type: "varchar", name: "medical_practice_number", length: 255, nullable: false })
    medicalPracticeNumber: string

    @Column({ type: "bytea", nullable: true})
    signature: Buffer

    @Column({ type: "json", default: {}})
    metadata: Record<string, any>

    @OneToMany(() => ScheinReport, (report) => report.doctor)
    scheinReports: ScheinReport[]
}
