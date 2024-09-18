import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Patients {

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
}
