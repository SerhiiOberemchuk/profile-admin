import { projects } from "@/db/schema";
import { db } from "@/db/db";
import { eq } from "drizzle-orm";

export async function getProgectById(id: number) {
  const data = await db.select().from(projects).where(eq(projects.id, id));
  return data[0];
}
