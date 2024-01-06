import { NextRequest, NextResponse } from "next/server";
import data from "./data.json";

export async function GET(
  request: NextRequest,
  { params }: { params: { district: string } }
) {
  let team = params.district;
  team.replace("%20", " ");
  const dis = data.states.filter((state) => state.state === team);
  if (dis.length === 0)
    return NextResponse.json({
      success: false,
      status: 404,
      error: "District not found",
    });
  return NextResponse.json({
    success: true,
    status: 200,
    data: [...dis[0].districts],
  });
}
