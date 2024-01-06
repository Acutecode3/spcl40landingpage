export type Form1Type = {
  name: string;
  email: string;
  phone: string;
  age: number;
  terms: boolean;
};
export const DefForm1: Form1Type = {
  name: "",
  email: "",
  phone: "",
  age: 0,
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
  come_to_know: string;
  previous_job_experience: string;
  why_enroll: string;
};

export const DefForm3: Form3Type = {
  career_goal: "",
  come_to_know: "",
  previous_job_experience: "",
  why_enroll: "",
};

export type pagesType = 2;
