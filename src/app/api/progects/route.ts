import { db } from "@/db/db";
import { projects } from "@/db/schema";
import { NextResponse } from "next/server";

export default async function GET() {
  try {
    const allProgects = await db.select().from(projects);
    if (!allProgects) {
      return NextResponse.json(
        { message: "No progects found" },
        { status: 404 },
      );
    }
    return NextResponse.json(allProgects, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error in GET /api/progects", error },
      { status: 500 },
    );
  }
}
