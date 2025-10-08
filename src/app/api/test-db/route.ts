import { connectToDatabase } from "../../../../database/mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDatabase();
    return NextResponse.json({ message: "Database connected successfully" });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Database connection failed",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
