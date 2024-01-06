import cn from "@/lib/cn";
import { useState } from "react";
import { prevJobExperience, trainingStartTime } from "@/lib/data/form";
import styles from "../../form.module.sass";

const ThirdPanel = () => {
  const options = ["No", "Yes", "Maybe"];
  const [selectedOption, setSelectedOption] = useState<string>("No");
  return (
    <form className={cn(styles.forms)}>
      <div className={styles.form_section}>
        <label htmlFor="career_goal">
          What is your primary career goal post-B. Com?*
        </label>
        <textarea
          placeholder="(e.g., Become an accountant, Advance in finance, etc.)"
          id="career_goal"
        />
      </div>
      <div className={styles.form_section}>
        <label htmlFor="start_training_by">
          When do you plan to start your training with us?*
        </label>
        <select name="start_training_by" id="start_training_by">
          <option value="">Select an option</option>
          {trainingStartTime &&
            trainingStartTime.map((time) => (
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
        <select name="previous_job_experience" id="previous_job_experience">
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
        <label htmlFor="financial_assistance">
          Would you require financial assistance or payment plans for the
          program?*
        </label>
        <div className={styles.row_container} id="financial_assistance">
          {options.map((option) => {
            return (
              <div
                className={styles.row_container}
                onClick={() => setSelectedOption(option)}
              >
                <span
                  id="maybe_fa"
                  className={cn(
                    styles.radio,
                    option === selectedOption ? styles.selected : ""
                  )}
                />
                <label htmlFor="maybe_fa">{option}</label>
              </div>
            );
          })}
        </div>
      </div>
    </form>
  );
};

export default ThirdPanel;
