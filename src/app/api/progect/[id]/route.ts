import { db } from "@/db/db";
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

type Params = Promise<{ id: number }>;

export async function GET(req: Request, segmentData: { params: Params }) {
  const { id } = await segmentData.params;
  const idNumber = Number(id);
  console.log(`GET /api/progect/${idNumber}`);

  try {
    const progect = await db
      .select()
      .from(projects)
      .where(eq(projects.id, idNumber));

    if (!progect) {
      return NextResponse.json(
        { message: "Progect not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(progect[0], { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error in GET /api/progect/[id]", error },
      { status: 500 },
    );
  }
}
