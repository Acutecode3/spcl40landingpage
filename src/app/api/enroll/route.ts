import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";

type EnrollData = {
  name: string;
  email: string;
  phone: string;
  guardian_name: string;
  guardian_phone: string;
};

const err = (message: string, status?: number) =>
  NextResponse.json({
    status: status || 400,
    success: false,
    message,
  });

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: parseInt(process.env.PG_PORT || "5432"),
  ssl: {
    rejectUnauthorized: false,
  },
});
const table = process.env.PG_TABLE;

export async function POST(req: NextRequest) {
  // checking incoming data
  try {
    const data: EnrollData = await req.json();
    if (!data) return err("No details provided!");
    console.log(data);

    // sending data to the db
    const query = `INSERT INTO ${table} VALUES ($1, $2, $3, $4, $5)`;
    const result = await pool.query(query, [
      data.name,
      data.email,
      data.phone,
      data.guardian_name,
      data.guardian_phone,
    ]);
    console.log(result);

    return NextResponse.json({
      status: 200,
      success: true,
      body: result,
    });
  } catch (e) {
    console.log(e);
    return err("Something went wrong while saving your details!");
  }
}
