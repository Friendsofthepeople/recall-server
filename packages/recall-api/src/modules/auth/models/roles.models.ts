import { pgTable, text, varchar, boolean, timestamp } from "drizzle-orm/pg-core";
import { relations } from 'drizzle-orm';
import { users } from "./user.models";
import { baseColumns } from '@recall-server/data/database/base-columns';

export const roles = pgTable('roles', {
    id: varchar('id', { length: 256 }).primaryKey(),
    name: text('name'),
    description: text('description'),
    isActive: boolean('is_active').default(false),
    ...baseColumns
});

export const userRoles = pgTable('user_roles', {
    userId: varchar('user_id').references(() => users.id),
    roleId: varchar('role_id').references(() => roles.id),
});

export const usersRelations = relations(users, ({ one }) => ({
    userRoles: one(userRoles),
}));
