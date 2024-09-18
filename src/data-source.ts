import "reflect-metadata"
import { DataSource } from "typeorm"
import { Patient } from "./entity/patient"
import { Doctor } from "./entity/doctor"
import { Schein } from "./entity/schein"


export const appDataSource = new DataSource({
    type: "postgres",
    host: "noscai-db",
    port: 5432,
    username: "noscai",
    password: "postgres",
    database: "noscai_db",
    synchronize: true,
    logging: false,
    entities: [Patient, Doctor, Schein],
    migrations: [],
    subscribers: [],
})
