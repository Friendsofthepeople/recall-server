import { timestamp } from 'drizzle-orm/pg-core';

export const baseColumns = {
    createdAt: timestamp('created_at').default(new Date()),
    updatedAt: timestamp('updated_at').default(new Date()),
};;
