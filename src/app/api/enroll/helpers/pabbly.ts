import { EnrollData } from "../route";

export const sendPabblyWebhook = async (data: EnrollData) => {
  const PABBLY_WEBHOOK_URL = process.env.PABBLY_WEBHOOK_URL;
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("phone", data.phone);
  formData.append("age", data.age.toString());
  formData.append("dob", data.dob);
  formData.append("guardian_name", data.guardian_name);
  formData.append("guardian_phone", data.guardian_phone);
  formData.append("state", data.state);
  formData.append("district", data.district);
  formData.append("education_level", data.education_level);
  formData.append("career_goal", data.career_goal);
  formData.append("start_training_by", data.start_training_by);
  formData.append("previous_job_experience", data.previous_job_experience);
  formData.append("financial_assistance", data.financial_assistance);

  if (!PABBLY_WEBHOOK_URL) {
    console.error("PABBLY_WEBHOOK_URL not found");
    return;
  }

  try {
    const res = await fetch(PABBLY_WEBHOOK_URL, {
      method: "POST",
      body: formData,
    });
    const response = await res.json();
    if (response.status === "success") {
      console.log("Pabbly entry done");
    } else {
      console.log(response);
    }
  } catch (err) {
    console.log("Error in Pabbly");
    console.log(data);
    console.log(err);
  }
};
