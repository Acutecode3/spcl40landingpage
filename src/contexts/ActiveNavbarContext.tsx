"use client";

import { createContext, useContext, useState } from "react";
import { ChildrenProps } from "@/types/common.types";

type ActiveNavbarContextType = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};
const def = {
  activeSection: "",
  setActiveSection: () => {},
};

export const ActiveNavbarContext = createContext<ActiveNavbarContextType>(def);

const ActiveNavbarProvider = (props: ChildrenProps) => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const returnVars: ActiveNavbarContextType = {
    activeSection,
    setActiveSection,
  };
  return (
    <ActiveNavbarContext.Provider value={returnVars}>
      {props.children}
    </ActiveNavbarContext.Provider>
  );
};

export const useNavbarContext = () => useContext(ActiveNavbarContext);

export default ActiveNavbarProvider;
