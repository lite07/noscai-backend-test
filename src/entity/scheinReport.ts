import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Index } from "typeorm"
import { Patient } from "./patient"
import { Doctor } from "./doctor"
import { Schein } from "./schein"

@Entity({name: "schein_reports"})
export class ScheinReport {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Patient, (patient) => patient.scheinReports, { onDelete: "CASCADE" })
    patient: Patient

    @ManyToOne(() => Doctor, (doctor) => doctor.scheinReports, { onDelete: "CASCADE" })
    doctor: Doctor

    @ManyToOne(() => Doctor, (doctor) => doctor.scheinReports, { onDelete: "CASCADE" })
    schein: Schein

    @Column({ type: "date", name: "date_of_issue", nullable: false })
    dateOfIssue: Date

    @Column({ type: "jsonb", default: {}})
    metadata: Record<string, any>
}
