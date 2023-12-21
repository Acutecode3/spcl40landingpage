"use client";

import cn from "@/lib/cn";
import styles from "./curriculum.module.sass";
import SubHeading from "@/components/ui/SubHeading";
import ApplyNow from "../Navbar/components/ApplyNow";
import DownloadCurriculum from "../Navbar/components/DownloadCurriculum";
import AccordionComponent from "./components/AccordionComponent";
import { CurriculumDetails } from "@/lib/data/curriculum";
import SectionLayouts from "@/components/SectionLayouts";

const Curriculum = () => {
  return (
    <SectionLayouts id="journey" className={styles.section} providePadding>
      <SubHeading
        whiteText="Programme"
        yellowText="Journey"
        stroke
        blackText=""
        size="30px"
      />
      <div className={cn(styles.content)}>
        <div className={styles.left}>
          <p className={styles.text}>
            {`In 'Special 40', a course where you'll learn real-world skills in
            Accounting, Taxation, and GST. This program isn't just about
            learning; it's about doing. You'll feel like you're part of a
            learning group, just like in a real classroom.`}
            <br />
            <br />
            {`Here's what you'll learn:`}
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
    </SectionLayouts>
  );
};

export default Curriculum;
