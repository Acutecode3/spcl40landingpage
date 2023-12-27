"use client";

import { useState } from "react";
import styles from "../curriculum.module.sass";
import cn from "@/lib/cn";
import Caret from "./Caret";
import Content from "./Content";

type Props = {
  heading: string;
  topics: string[];
};

const AccordionComponent = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => setIsOpen(!isOpen);
  return (
    <div className={styles.accordion}>
      <span className={styles.circle}></span>
      <div className={styles.accordion_heading} onClick={toggleAccordion}>
        <span>{props.heading}</span>
        <span className={isOpen ? styles.down : styles.up}>
          <Caret />
        </span>
      </div>
      {isOpen && (
        <div
          className={cn(
            styles.accordion_content,
            isOpen ? styles.open : styles.close
          )}
        >
          <Content topics={props.topics} />
        </div>
      )}
    </div>
  );
};

export default AccordionComponent;
