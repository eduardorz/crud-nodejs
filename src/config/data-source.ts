import { DataSource } from "typeorm";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from "./envs";
import { User } from "../entities/User";


export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    dropSchema: true,
    synchronize: true,
    logging: true, 
    entities: [User], 
    subscribers: [],
    migrations: [],
})

export const UserModel = AppDataSource.getRepository