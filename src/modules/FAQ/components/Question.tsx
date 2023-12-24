"use client";

import { useState } from "react";
import styles from "../faq.module.sass";
import Check from "./Check";
import { FaqType } from "@/lib/data/faqs";

const Question = (props: FaqType) => {
  const [isOpen, setIsOpen] = useState(props.open || false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className={styles.question}>
      <h2 onClick={toggle} className={styles.q}>
        <span>{props.q}</span>
        <Check />
      </h2>
      {isOpen && <p className={styles.a}>{props.a}</p>}
    </div>
  );
};

export default Question;
