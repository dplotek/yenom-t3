import { relations } from 'drizzle-orm';
import { pgTable, real, varchar } from 'drizzle-orm/pg-core';
import { users } from './users';

export const moneySources = pgTable("money_sources", {
  id: varchar("id", { length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: varchar("name", { length: 255 }),
  amount: real("amount").notNull(),
  currency: varchar("currency", { length: 255 }),
  userId: varchar("user_id", { length: 255 })
    .notNull()
    .references(() => users.id),
})

export const moneySourcesRelations = relations(moneySources, ({ one }) => ({
  user: one(users)
}));