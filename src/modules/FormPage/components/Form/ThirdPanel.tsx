import cn from "@/lib/cn";
import { useState } from "react";
import { prevJobExperience, referrals } from "@/lib/data/form";
import styles from "../../form.module.sass";
import { useFormContext } from "../../FormContext";

const ThirdPanel = () => {
  const { form3Data, setForm3Data } = useFormContext();
  const options = ["No", "Yes", "Maybe"];
  const [selectedOption, setSelectedOption] = useState<string>("No");

  const handleCG = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setForm3Data({ ...form3Data, career_goal: e.target.value });

  const handleCTK = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setForm3Data({ ...form3Data, come_to_know: e.target.value });

  const handlePJE = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setForm3Data({ ...form3Data, previous_job_experience: e.target.value });

  const handleWE = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setForm3Data({ ...form3Data, why_enroll: e.target.value });

  return (
    <div className={cn(styles.forms)}>
      <div className={styles.form_section}>
        <label htmlFor="career_goal">
          What is your primary career goal post-B. Com?*
        </label>
        <textarea
          placeholder="(e.g., Become an accountant, Advance in finance, etc.)"
          id="career_goal"
          onChange={handleCG}
          value={form3Data.career_goal}
        />
      </div>
      <div className={styles.form_section}>
        <label htmlFor="come_to_know">
          How did you come to know about Special40?*
        </label>
        <select
          name="come_to_know"
          id="come_to_know"
          onChange={handleCTK}
          value={form3Data.come_to_know}
        >
          <option value="">Select an option</option>
          {referrals &&
            referrals.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
        </select>
      </div>
      <div className={styles.form_section}>
        <label htmlFor="previous_job_experience">
          Do you have any previous job experience in the finance sector?*
        </label>
        <select
          name="previous_job_experience"
          id="previous_job_experience"
          onChange={handlePJE}
          value={form3Data.previous_job_experience}
        >
          <option value="">Select an option</option>
          {prevJobExperience &&
            prevJobExperience.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
        </select>
      </div>
      <div className={styles.form_section}>
        <label htmlFor="why_enroll">
          Explain why you wish to enroll in the special 40 program*
        </label>
        <textarea
          placeholder="(Note: Students who have filled this out have a higher chance of getting selected.)"
          id="why_enroll"
          onChange={handleWE}
          value={form3Data.why_enroll}
        />
      </div>
    </div>
  );
};

export default ThirdPanel;
