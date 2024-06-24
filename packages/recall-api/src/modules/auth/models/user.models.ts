import { pgTable, text, varchar, timestamp, boolean } from "drizzle-orm/pg-core";
import { baseColumns } from '@recall-server/data/database/base-columns';

export const users = pgTable('users', {
  id: varchar('id', { length: 256 }).primaryKey(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  fullName: text('full_name').notNull(),
  phoneNumber: varchar('phone_number').notNull(),
  email: varchar('email').unique(),
  emailVerified: boolean('email_verified').default(false),
  isActive: boolean('is_active').default(false),
  password: varchar('password').notNull(),
  ...baseColumns
});


