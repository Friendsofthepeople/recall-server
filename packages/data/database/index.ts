import { drizzle } from "drizzle-orm/node-postgres";
import { Client, ClientConfig } from "pg";
import { dbConfig } from '@recall-server/core/config';
import { defineConfig } from "drizzle-kit";

const postgresConfig = dbConfig.postgres;

const config: string | ClientConfig = postgresConfig.url || {
    user: postgresConfig.user,
    password: postgresConfig.password,
    host: postgresConfig.host,
    port: postgresConfig.port,
    database: postgresConfig.database,
}

export const dbClient = new Client(config);

export const drizzleConfig = defineConfig({
    dialect: "postgresql",
    schema: "./src/**/*.models.ts",
    out: "migrations",
    dbCredentials: postgresConfig.url ? {
        url: postgresConfig.url
    } : {
        user: postgresConfig.user,
        password: postgresConfig.password,
        host: postgresConfig.host,
        port: postgresConfig.port,
        database: postgresConfig.database,
    }
});

export const db = <T>(schema : T ) => {
    return drizzle(dbClient, {
        schema: schema as Record<string, T>
    });
}

const drizzleInstance = drizzle(dbClient);
export default drizzle(dbClient);

