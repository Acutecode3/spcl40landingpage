"use client";

import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import cn from "@/lib/cn";
import { captions } from "@/lib/data/form";
import styles from "../form.module.sass";
import FirstPanel from "./Form/FirstPanel";
import SecondPanel from "./Form/SecondPanel";
import ThirdPanel from "./Form/ThirdPanel";
import { loadingText, useFormContext } from "../FormContext";
import Left from "./Arrows/Left";
import Right from "./Arrows/Right";

const SubmitForm = () => {
  const {
    currentForm,
    goRight,
    goLeft,
    maxVisitableForm,
    handleClicked,
    buttonText,
  } = useFormContext();
  const searchParams = useSearchParams();
  const toDownload = searchParams.get("download_curriculum") === "true";
  return (
    <div className={styles.form_container}>
      <div
        className={cn(
          "flex-row justify-between items-center",
          styles.caption_container
        )}
      >
        <div className={cn("flex flex-col", styles.caption_holder)}>
          <div>{captions[currentForm]}</div>
          <div className={"flex-row items-center"}>
            <span
              className={cn(styles.meter, currentForm >= 0 ? styles.am : "")}
            ></span>
            <span
              className={cn(styles.meter, currentForm >= 1 ? styles.am : "")}
            ></span>
            <span
              className={cn(styles.meter, currentForm >= 2 ? styles.am : "")}
            ></span>
          </div>
        </div>
        <div className="flex flex-row">
          <button
            onClick={() => goLeft()}
            className={currentForm === 0 ? styles.hideLittle : ""}
            disabled={currentForm === 0}
          >
            <Left />
          </button>
          <button
            onClick={() => goRight()}
            className={currentForm >= maxVisitableForm ? styles.hideLittle : ""}
            disabled={currentForm >= maxVisitableForm}
          >
            <Right />
          </button>
        </div>
      </div>
      {currentForm === 0 && <FirstPanel />}
      {currentForm === 1 && <SecondPanel />}
      {currentForm === 2 && <ThirdPanel />}
      <button
        type="submit"
        className={cn(styles.submit, styles.enabled)}
        onClick={() => {
          handleClicked(toDownload);
        }}
        disabled={buttonText === loadingText}
      >
        {buttonText}
      </button>
    </div>
  );
};

// export default SubmitForm;
export default dynamic(() => Promise.resolve(SubmitForm), { ssr: false });
