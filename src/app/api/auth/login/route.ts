import { NextResponse } from "next/server";

export async function POST(res: Response, req: Request) {
  const data = await res.json();

  return NextResponse.json({ data: "login success" }, { status: 201 });
}
