import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    sistema: "System32",
    status: "online",
    data: new Date().toISOString(),
  });
}
