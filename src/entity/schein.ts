import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Index } from "typeorm"
import { Patient } from "./patient"
import { Doctor } from "./doctor"

@Entity()
export class Schein {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Patient, (patient) => patient.scheinReports, { onDelete: "CASCADE" })
    patient: Patient

    @ManyToOne(() => Doctor, (doctor) => doctor.scheinReports, { onDelete: "CASCADE" })
    doctor: Doctor

    @Index()
    @Column({ type: "varchar", length: 255, nullable: false, unique: true })
    type: string

    @Column({ type: "date", nullable: false })
    dateOfIssue: Date

    @Column({ type: "jsonb", default: {}})
    metadata: Record<string, any>
}
