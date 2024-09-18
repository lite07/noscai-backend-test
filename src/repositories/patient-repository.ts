import { FindManyOptions, Repository } from "typeorm";
import { Patient } from "../entity/patient";

export class PatientRepository {
    private repository: Repository<Patient>;

    public constructor(repository: Repository<Patient>) {
        this.repository = repository
    }

    public async getAllPatient(whereOptions: FindManyOptions = {}): Promise<Patient[]> {
        return this.repository.find(whereOptions)
    }

    public async createPatient(patient: Patient) {
        await this.repository.createQueryBuilder()
                             .insert()
                             .into(Patient)
                             .values({
                                name: patient.name,
                                dateOfBirth: patient.dateOfBirth,
                                insuranceNumber: patient.insuranceNumber,
                                metadata: patient.metadata
                             })
                             .execute()
    }
}