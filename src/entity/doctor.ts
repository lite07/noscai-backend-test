import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Schein } from "./schein"

@Entity()
export class Doctor {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", length: 255, nullable: false })
    name: string

    @Column({ type: "varchar", length: 255, nullable: false })
    doctorNumber: string

    @Column({ type: "varchar", length: 255, nullable: false })
    medicalPracticeNumber: string

    @Column({ type: "bytea", nullable: true})
    signature: Buffer

    @Column({ type: "json", default: {}})
    metadata: Record<string, any>

    @OneToMany(() => Schein, (schein) => schein.doctor)
    scheinReports: Schein[]
}
