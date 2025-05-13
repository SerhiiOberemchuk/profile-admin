import { pgTable, varchar, serial, text, timestamp } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  title: varchar("title", { length: 255 }).notNull(),
  category: varchar({ length: 255 }).notNull(),
  image_src: text("image_src").notNull(),
  description: text("description").notNull(),
  technologies: text("technologies").array().notNull(),
  features: text("features").array().notNull(),
  year: varchar("year", { length: 10 }).notNull(),
  client: varchar("client", { length: 255 }).notNull(),
  website_url: text("website_url").notNull(),
  created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updated_at: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});
