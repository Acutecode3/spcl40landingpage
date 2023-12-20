"use client";

import cn from "@/lib/cn";
import styles from "./curriculum.module.sass";
import SubHeading from "@/components/ui/SubHeading";
import ApplyNow from "../Navbar/components/ApplyNow";
import DownloadCurriculum from "../Navbar/components/DownloadCurriculum";
import AccordionComponent from "./components/AccordionComponent";
import { CurriculumDetails } from "@/lib/data/curriculum";

const Curriculum = () => {
  const topics = [
    "Introduction to Accounting",
    "Accounting Equation",
    "Journal Entries",
    "Ledger",
    "Trial Balance",
    "Financial Statements",
  ];
  return (
    <section className={cn("provide_padding", styles.section)} id="journey">
      <SubHeading
        whiteText="Meet the"
        yellowText="mentors"
        stroke
        blackText=""
        size="30px"
      />
      <div className={cn(styles.content)}>
        <div className={styles.left}>
          <p className={styles.text}>
            The programme is designed in such a way that you build a strong
            learning community, just like you would on a physical campus!
          </p>
          <div className="flex-col-mobile gap-1">
            <ApplyNow text="Enroll Now" />
            <DownloadCurriculum />
          </div>
        </div>
        <div className={styles.right}>
          {CurriculumDetails.map((item, index) => (
            <div key={index}>
              {/* <TermComponent number={item.term} /> */}
              {item.tables.map((table, index) => (
                <AccordionComponent
                  key={index}
                  heading={table.heading}
                  topics={table.topics}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
