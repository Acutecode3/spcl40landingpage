"use client";

import { ChildrenProps } from "@/types/common.types";
import { createContext, useContext, useState } from "react";
import {
  DefForm1,
  DefForm2,
  DefForm3,
  Form1Type,
  Form2Type,
  Form3Type,
} from "@/types/formContext.types";

type FormContextType = {
  maxVisitableForm: number;
  currentForm: number;
  goRight: () => void;
  goLeft: () => void;
};

const defType = {
  maxVisitableForm: 0,
  currentForm: 0,
  goRight: () => {},
  goLeft: () => {},
};

const FormContext = createContext<FormContextType>(defType);

export function FormProvider(props: ChildrenProps) {
  const [maxVisitableForm, setMaxVisitableForm] = useState<number>(0);
  const [currentForm, setCurrentForm] = useState<number>(0);
  const [form1Data, setForm1Data] = useState<Form1Type>(DefForm1);
  const [form2Data, setForm2Data] = useState<Form2Type>(DefForm2);
  const [form3Data, setForm3Data] = useState<Form3Type>(DefForm3);
  const goRight = () => {
    if (currentForm < 0 || currentForm >= 2) return;
    setCurrentForm((n) => n + 1);
  };
  const goLeft = () => {
    if (currentForm <= 0 || currentForm > 2) return;
    setMaxVisitableForm(currentForm - 1);
    setCurrentForm((n) => n - 1);
  };
  return (
    <FormContext.Provider
      value={{
        maxVisitableForm,
        currentForm,
        goRight,
        goLeft,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
}

export const useFormContext = () => useContext(FormContext);
