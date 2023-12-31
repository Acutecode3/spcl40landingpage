import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";
import { sendPabblyWebhook } from "./helpers/pabbly";

export type EnrollData = {
  name: string;
  email: string;
  phone: string;
  age: number;
  guardian_name: string;
  guardian_phone: string;
  state: string;
  district: string;
  education_level: string;
  career_goal: string;
  come_to_know: string;
  previous_job_experience: string;
  why_enroll: string;
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
    // const query = `INSERT INTO ${table} (name, email, phone, guardian_name, guardian_phone) VALUES ($1, $2, $3, $4, $5)`;
    // const result: any = await pool.query(query, [
    //   data.name,
    //   data.email,
    //   data.phone,
    //   data.guardian_name,
    //   data.guardian_phone,
    // ]);
    // sending data to the db
    const query = `
  INSERT INTO ${table} (
    name, email, phone, age,
    guardian_name, guardian_phone, state, district,
    education_level, career_goal, come_to_know,
    previous_job_experience, why_enroll
  ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
`;

    const result: any = await pool.query(query, [
      data.name,
      data.email,
      data.phone,
      data.age,
      data.guardian_name,
      data.guardian_phone,
      data.state,
      data.district,
      data.education_level,
      data.career_goal,
      data.come_to_know,
      data.previous_job_experience,
      data.why_enroll,
    ]);

    sendPabblyWebhook(data);

    if (result.rowCount === 1)
      return NextResponse.json({
        status: 200,
        success: true,
        body: result,
      });
    else
      return err(
        "Something went wrong while saving your details in the server.!",
        500
      );
  } catch (e) {
    console.log(e);
    return err("Something went wrong while saving your details!", 500);
  }
}
