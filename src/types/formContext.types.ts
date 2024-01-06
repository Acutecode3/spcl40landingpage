export type Form1Type = {
  name: string;
  email: string;
  phone: string;
  age: number;
  dob: string;
  terms: boolean;
};
export const DefForm1: Form1Type = {
  name: "",
  email: "",
  phone: "",
  age: 0,
  dob: "",
  terms: false,
};

export type Form2Type = {
  guardian_name: string;
  guardian_phone: string;
  state: string;
  district: string;
  education_level: string;
};
export const DefForm2: Form2Type = {
  guardian_name: "",
  guardian_phone: "",
  state: "",
  district: "",
  education_level: "",
};

export type Form3Type = {
  career_goal: string;
  start_training_by: string;
  previous_job_experience: string;
  financial_assistance: "yes" | "no" | "maybe";
};

export const DefForm3: Form3Type = {
  career_goal: "",
  start_training_by: "",
  previous_job_experience: "",
  financial_assistance: "maybe",
};

export type pagesType = 2;
