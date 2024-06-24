import {InferSelectModel} from 'drizzle-orm';
import { PgTable } from 'drizzle-orm/pg-core';

export type Domain<T extends PgTable> = InferSelectModel<T>;
