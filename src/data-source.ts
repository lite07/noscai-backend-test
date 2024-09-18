import "reflect-metadata"
import { DataSource } from "typeorm"
import { Patients } from "./entity/patients"
import { Doctors } from "./entity/doctors"


export const appDataSource = new DataSource({
    type: "postgres",
    host: "noscai-db",
    port: 5432,
    username: "noscai",
    password: "postgres",
    database: "noscai_db",
    synchronize: true,
    logging: false,
    entities: [Patients, Doctors],
    migrations: [],
    subscribers: [],
})
