"use client";

import cn from "@/lib/cn";
import styles from "../form.module.sass";
import { useState } from "react";
import Tick from "./Tick";

const SubmitForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const toggleCheck = () => setIsChecked(!isChecked);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isChecked) return alert("Please agree to the terms and conditions");
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form_section}>
        <label htmlFor="name">Name*</label>
        <input required type="text" id="name" />
      </div>
      <div className={styles.form_section}>
        <label htmlFor="email">Email*</label>
        <input required type="text" id="email" />
      </div>
      <div className={styles.form_section}>
        <label htmlFor="phone">Phone Number*</label>
        <input
          required
          type="text"
          id="phone"
          inputMode="numeric"
          defaultValue="+91"
        />
      </div>
      <div className={styles.form_section}>
        <label htmlFor="g_name">Guardian{"'"}s Name*</label>
        <input required type="text" id="g_name" inputMode="numeric" />
      </div>
      <div className={styles.form_section}>
        <label htmlFor="g_phone">Guardian{"'"}s Phone Number*</label>
        <input
          required
          type="text"
          id="g_phone"
          inputMode="numeric"
          defaultValue="+91"
        />
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
      <button className={styles.submit} type="submit">
        Enroll Now
      </button>
    </form>
  );
};

export default SubmitForm;
