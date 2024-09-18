import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Schein } from "./schein"

@Entity()
export class Patient {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", length: 255, nullable: false})
    name: string

    @Column({ type: "date", nullable: false})
    dateOfBirth: Date

    @Column({ type: "varchar", length: 255, nullable: true })
    insuranceNumber: string

    @Column({ type: "jsonb", default: {} })
    metadata: Record<string, any>

    @OneToMany(() => Schein, (schein) => schein.patient)
    scheinReports: Schein[]
}
