import { FindManyOptions, Repository } from "typeorm";
import { Schein } from "../entity/schein";

export class ScheinRepository {
    private repository: Repository<Schein>;

    public constructor(repository: Repository<Schein>) {
        this.repository = repository
    }

    public async getAllSchein(whereOptions: FindManyOptions = {}): Promise<Schein[]> {
        return this.repository.find(whereOptions)
    }

    public async createSchein(schein: Schein) {
        await this.repository.createQueryBuilder()
                             .insert()
                             .into(Schein)
                             .values({
                                type: schein.type,
                                template: schein.template,
                                validationRules: schein.validationRules,
                             })
                             .execute()
    }

    public async deleteScheinById(id: number) {
        await this.repository.delete(id)
    }
}