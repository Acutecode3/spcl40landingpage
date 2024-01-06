import { useState } from "react";
import styles from "../../form.module.sass";
import cn from "@/lib/cn";
import Tick from "../Tick";

const FirstPanel = () => {
  const [isChecked, setIsChecked] = useState(false);
  const toggleCheck = () => setIsChecked(!isChecked);

  return (
    <form className={cn(styles.forms)}>
      <div className={styles.form_section}>
        <label htmlFor="p_name">Name*</label>
        <input type="text" id="p_name" />
      </div>
      <div className={styles.form_section}>
        <label htmlFor="email">Email*</label>
        <input type="email" id="email" />
      </div>
      <div className={styles.form_section}>
        <label htmlFor="phone">Phone Number*</label>
        <input type="text" id="phone" inputMode="numeric" defaultValue="+91 " />
      </div>
      <div className={styles.row_container}>
        <div className={styles.form_section}>
          <label htmlFor="age">Age*</label>
          <input type="text" id="age" inputMode="numeric" />
        </div>
        <div className={styles.form_section}>
          <label htmlFor="dob">DOB*</label>
          <input type="date" id="dob" />
        </div>
      </div>
      <div className={styles.form_section_check}>
        <div
          className={cn(styles.checkbox, isChecked ? styles.checked : "")}
          onClick={toggleCheck}
        >
          {isChecked && <Tick />}
        </div>
        <label htmlFor="terms">
          I agree to the{" "}
          <span className="text-blue underline">Terms & Conditions</span>
        </label>
      </div>
    </form>
  );
};

export default FirstPanel;
