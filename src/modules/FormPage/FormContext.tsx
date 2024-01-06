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
  pagesType,
} from "@/types/formContext.types";

type FormContextType = {};

const FormContext = createContext<FormContextType>({});

export function FormProvider(props: ChildrenProps) {
  const [maxVisitableForm, setMaxVisitableForm] = useState<pagesType>(0);
  const [currentForm, setCurrentForm] = useState<pagesType>(0);
  const [form1Data, setForm1Data] = useState<Form1Type>(DefForm1);
  const [form2Data, setForm2Data] = useState<Form2Type>(DefForm2);
  const [form3Data, setForm3Data] = useState<Form3Type>(DefForm3);

  return (
    <FormContext.Provider value={{}}>{props.children}</FormContext.Provider>
  );
}

export const useFormContext = () => useContext(FormContext);
