import { useState } from "react";
import styles from "../../form.module.sass";
import cn from "@/lib/cn";
import Tick from "../Tick";
import { useFormContext } from "../../FormContext";

const FirstPanel = () => {
  const { form1Data, setForm1Data } = useFormContext();
  const [isChecked, setIsChecked] = useState(false);
  const toggleCheck = () => {
    setForm1Data({ ...form1Data, terms: !isChecked });
    setIsChecked(!isChecked);
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm1Data({ ...form1Data, name: e.target.value });

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm1Data({ ...form1Data, email: e.target.value });

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm1Data({ ...form1Data, phone: e.target.value });

  const handleAge = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm1Data({ ...form1Data, age: Number(e.target.value) });

  const handleDOB = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm1Data({ ...form1Data, dob: e.target.value });

  return (
    <div className={cn(styles.forms)}>
      <div className={styles.form_section}>
        <label htmlFor="p_name">Name*</label>
        <input
          type="text"
          id="p_name"
          onChange={handleName}
          value={form1Data.name}
        />
      </div>
      <div className={styles.form_section}>
        <label htmlFor="email">Email*</label>
        <input
          type="email"
          id="email"
          onChange={handleEmail}
          value={form1Data.email}
        />
      </div>
      <div className={styles.form_section}>
        <label htmlFor="phone">Phone Number*</label>
        <input
          type="text"
          id="phone"
          inputMode="numeric"
          placeholder="+91 "
          onChange={handlePhone}
          value={form1Data.phone}
        />
      </div>
      <div className={styles.row_container}>
        <div className={styles.form_section}>
          <label htmlFor="age">Age*</label>
          <input
            type="text"
            id="age"
            inputMode="numeric"
            onChange={handleAge}
            value={form1Data.age === 0 ? "" : form1Data.age}
          />
        </div>
        <div className={styles.form_section}>
          <label htmlFor="dob">DOB*</label>
          <input
            type="date"
            id="dob"
            onChange={handleDOB}
            value={form1Data.dob}
          />
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
    </div>
  );
};

export default FirstPanel;
