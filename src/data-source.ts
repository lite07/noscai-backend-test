import "reflect-metadata"
import { DataSource } from "typeorm"


export const appDataSource = new DataSource({
    type: "postgres",
    host: "noscai-db",
    port: 5432,
    username: "noscai",
    password: "postgres",
    database: "noscai_db",
    synchronize: true,
    logging: false,
    entities: ["./entity/*.js"],
    migrations: [],
    subscribers: [],
})
