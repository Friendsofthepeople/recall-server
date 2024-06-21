import { drizzle } from "drizzle-orm/node-postgres";
import { Client, ClientConfig } from "pg";
import { dbConfig } from '@recall-server/core/config';

const postgresConfig = dbConfig.postgres;

const config: string | ClientConfig = postgresConfig.url || {
    user: postgresConfig.user,
    password: postgresConfig.password,
    host: postgresConfig.host,
    port: postgresConfig.port,
    database: postgresConfig.database,
}

export const dbClient = new Client(config);

export default drizzle(dbClient);
