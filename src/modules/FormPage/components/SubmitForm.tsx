"use client";

import cn from "@/lib/cn";
import styles from "../form.module.sass";
import { useState } from "react";
import Tick from "./Tick";
import { toastError, toastSuccess } from "@/lib/toast";
import { checkData } from "../helpers/checkData";
import { useRouter, useSearchParams } from "next/navigation";
import { curriculumLink } from "@/lib/data/data";

const handleDownload = () => {
  if (typeof window === "undefined") return;
  const downloadLink = document.createElement("a");
  downloadLink.target = "_blank";
  downloadLink.href = curriculumLink;
  downloadLink.download = "curriculum.pdf";
  setTimeout(() => {
    downloadLink.click();
  }, 2000);
};

const SubmitForm = () => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const toggleCheck = () => setIsChecked(!isChecked);
  const [buttonText, setButtonText] = useState("Enroll Now");

  const searchParams = useSearchParams();
  const toDownload = searchParams.get("download_curriculum");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isChecked)
      return toastError("Please agree to the terms and conditions first!");
    const details = {
      name: e.currentTarget.p_name.value,
      email: e.currentTarget.email.value,
      phone: e.currentTarget.phone.value,
      guardian_name: e.currentTarget.g_name.value,
      guardian_phone: e.currentTarget.g_phone.value,
    };
    if (!checkData(details)) return;

    try {
      // send details to backend

      // on success
      router.push("/thank-you");
      toastSuccess("Your details have been submitted!");
      // if curriculum download is requested
      if (toDownload) handleDownload();
    } catch (err: any) {
      toastError(err.message || "Something went wrong!");
    } finally {
      setButtonText("Enroll Now");
    }
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form_section}>
        <label htmlFor="name">Name*</label>
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
      <div className={styles.form_section}>
        <label htmlFor="g_name">Guardian{"'"}s Name*</label>
        <input type="text" id="g_name" />
      </div>
      <div className={styles.form_section}>
        <label htmlFor="g_phone">Guardian{"'"}s Phone Number*</label>
        <input
          type="text"
          id="g_phone"
          inputMode="numeric"
          defaultValue="+91 "
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
        {buttonText}
      </button>
    </form>
  );
};

export default SubmitForm;
