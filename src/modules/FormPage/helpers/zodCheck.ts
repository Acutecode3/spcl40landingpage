import { z } from "zod";
import { toastError } from "@/lib/toast";

export const err = (result: any) => {
  let e = result.error.issues.map((issue: any) => issue.message);
  toastError(e.join(". "));
  return false;
};

const sch1 = z.object({
  name: z.string().min(2, { message: "Name is too short" }),
  email: z.string().email({ message: "Invalid email" }),
  phone: z.string().min(10, { message: "Invalid phone number" }),
  age: z
    .number()
    .min(18, { message: "You must be in the age category of 21-27" }),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms & conditions",
  }),
});

export function checkData1(data: any) {
  const result = sch1.safeParse(data);
  if (!result.success) return err(result);
  return true;
}

const sch2 = z.object({
  guardian_name: z.string().min(2, { message: "Name is too short" }),
  guardian_phone: z.string().min(10, { message: "Invalid phone number" }),
  state: z.string().min(2, { message: "Invalid state" }),
  district: z.string().min(2, { message: "Invalid district" }),
  education_level: z.string().min(2, { message: "Invalid education level" }),
});

export function checkData2(data: any) {
  const result = sch2.safeParse(data);
  if (!result.success) return err(result);
  return true;
}

const sch3 = z.object({
  career_goal: z.string().min(2, { message: "Write a better career goal" }),
  come_to_know: z.string().min(2, {
    message:
      "Specify the correct option that describes how you learned about Special40",
  }),
  previous_job_experience: z.string().min(2, {
    message: "Invalid previous job experience",
  }),
  why_enroll: z.string().min(10, {
    message:
      "Please provide a justification for your desire to enroll in Special40",
  }),
});

export function checkData3(data: any) {
  const result = sch3.safeParse(data);
  if (!result.success) return err(result);
  return true;
}
