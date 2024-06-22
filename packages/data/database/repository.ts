import drizzle, { db } from './index';
import { Domain as DomainType } from './domain'
import { PgDatabase, PgTable } from "drizzle-orm/pg-core";
import { NodePgDatabase } from "drizzle-orm/node-postgres";

class Repository<Domain extends DomainType<any>>{
    private readonly table: PgTable;
    public readonly db: NodePgDatabase<Record<string, any>>;

    constructor(schema: Domain) {
        this.db = db(schema);
    }
}

export default Repository;
