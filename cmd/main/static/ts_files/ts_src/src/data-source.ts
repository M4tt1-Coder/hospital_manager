import "reflect-metadata"
import { DataSource, ConnectionOptions } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "MySqLt3sT25#",
    database: "hospital",
    synchronize: true,
    logging: false,
    entities: ["src/entity/**/*.ts"],
    migrations: ["rsc/migration//**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
})
