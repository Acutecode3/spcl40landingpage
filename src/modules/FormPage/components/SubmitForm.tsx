"use client";

import FirstPanel from "./Form/FirstPanel";
import styles from "../form.module.sass";
import cn from "@/lib/cn";
import SecondPanel from "./Form/SecondPanel";
import ThirdPanel from "./Form/ThirdPanel";
import { useState } from "react";

const SubmitForm = () => {
  const [step, setStep] = useState(0);
  const handleSubmit = () => {
    if (step === 2) setStep(0);
    else setStep((prev) => prev + 1);
  };
  return (
    <div className={styles.form_container}>
      {step === 0 && <FirstPanel />}
      {step === 1 && <SecondPanel />}
      {step === 2 && <ThirdPanel />}
      <button
        className={cn(styles.submit, styles.enabled)}
        type="submit"
        onClick={handleSubmit}
      >
        Next Step
      </button>
    </div>
  );
};

export default SubmitForm;
