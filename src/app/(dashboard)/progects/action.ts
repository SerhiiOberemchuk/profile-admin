"use server";

import { db } from "@/db/db";
import { projects } from "@/db/schema";

export async function getProgects() {
  const allProgects = await db.select().from(projects);

  return allProgects;
}
