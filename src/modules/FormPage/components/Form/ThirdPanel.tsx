import cn from "@/lib/cn";
import { useState } from "react";
import { prevJobExperience, trainingStartTime } from "@/lib/data/form";
import styles from "../../form.module.sass";

const ThirdPanel = () => {
  const options = ["No", "Yes", "Maybe"];
  const [selectedOption, setSelectedOption] = useState<string>("No");
  return (
    <div className={cn(styles.forms)}>
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
        <label htmlFor="email">
          When do you plan to start your training with us?*
        </label>
        <select name="education" id="education">
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
        <label htmlFor="email">
          Do you have any previous job experience in the finance sector?*
        </label>
        <select name="education" id="education">
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
        <label htmlFor="email">
          Would you require financial assistance or payment plans for the
          program?*
        </label>
        <div className={styles.row_container}>
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
    </div>
  );
};

export default ThirdPanel;
