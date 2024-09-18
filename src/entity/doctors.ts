import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Doctors {

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
}
