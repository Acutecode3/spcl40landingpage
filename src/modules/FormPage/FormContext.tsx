"use client";

import { ChildrenProps } from "@/types/common.types";
import { createContext, useContext, useEffect, useState } from "react";
import {
  DefForm1,
  DefForm2,
  DefForm3,
  Form1Type,
  Form2Type,
  Form3Type,
} from "@/types/formContext.types";
import { checkData1, checkData2, checkData3 } from "./helpers/zodCheck";
import { toastError, toastSuccess } from "@/lib/toast";
import { eS, sT } from "./helpers/errors";
import { useRouter } from "next/navigation";
import { curriculumLink } from "@/lib/data/data";

type FormContextType = {
  maxVisitableForm: number;
  currentForm: number;
  goRight: () => void;
  goLeft: () => void;
  setForm1Data: (data: Form1Type) => void;
  setForm2Data: (data: Form2Type) => void;
  setForm3Data: (data: Form3Type) => void;
  form1Data: Form1Type;
  form2Data: Form2Type;
  form3Data: Form3Type;
  handleClicked: (toDownload: boolean) => Promise<void>;
  buttonText: string;
};

const defaultText = "Next Step";
export const loadingText = "Enrolling you for Special40...";
const defType = {
  maxVisitableForm: 0,
  currentForm: 0,
  goRight: () => {},
  goLeft: () => {},
  setForm1Data: () => {},
  setForm2Data: () => {},
  setForm3Data: () => {},
  form1Data: DefForm1,
  form2Data: DefForm2,
  form3Data: DefForm3,
  handleClicked: () => Promise.resolve(),
  buttonText: defaultText,
};

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

const FormContext = createContext<FormContextType>(defType);

export function FormProvider(props: ChildrenProps) {
  const router = useRouter();
  const [maxVisitableForm, setMaxVisitableForm] = useState<number>(0);
  const [currentForm, setCurrentForm] = useState<number>(0);
  const [form1Data, setForm1Data] = useState<Form1Type>(DefForm1);
  const [form2Data, setForm2Data] = useState<Form2Type>(DefForm2);
  const [form3Data, setForm3Data] = useState<Form3Type>(DefForm3);
  const [buttonText, setButtonText] = useState<string>(defaultText);

  const goRight = () => {
    if (currentForm < 0 || currentForm >= 2) return;
    setMaxVisitableForm(currentForm + 1);
    setCurrentForm((n) => n + 1);
  };
  const goLeft = () => {
    if (currentForm <= 0 || currentForm > 2) return;
    setCurrentForm((n) => n - 1);
  };

  useEffect(() => {
    if (currentForm === 0) setButtonText(defaultText);
    if (currentForm === 1) setButtonText("Move to next step");
    if (currentForm === 2) setButtonText("Submit");
  }, [currentForm]);

  const handleClicked = async (toDownload: boolean) => {
    let proceed = false;
    console.log(form1Data, form2Data, form3Data);
    if (currentForm === 0) proceed = checkData1(form1Data);
    if (currentForm === 1) proceed = checkData2(form2Data);
    if (currentForm === 2) {
      if (checkData3(form3Data)) {
        console.log("submit");
        if (!checkData1(form1Data) && !checkData2(form2Data))
          return toastError("Please fill the form first");

        const details = { ...form1Data, ...form2Data, ...form3Data };
        // submit data
        try {
          setButtonText(loadingText);
          const r = await fetch("/api/enroll", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(details),
          });
          if (!r.ok) toastError(eS[500]);
          else {
            // if res is ok
            const res: any = await r.json();
            console.log(res);
            if (res.success) {
              router.push("/thank-you");
              toastSuccess(sT);
              if (toDownload) handleDownload(); // if curriculum download is requested
              return;
            } else toastError(res.message || eS[res.status]);
          }
        } catch (err: any) {
          console.error(err);
          toastError(err.message);
          setButtonText("Submit Now");
        }
      }
    }
    if (proceed) goRight();
  };
  return (
    <FormContext.Provider
      value={{
        maxVisitableForm,
        currentForm,
        goRight,
        goLeft,
        setForm1Data,
        setForm2Data,
        setForm3Data,
        form1Data,
        form2Data,
        form3Data,
        handleClicked,
        buttonText,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
}

export const useFormContext = () => useContext(FormContext);
