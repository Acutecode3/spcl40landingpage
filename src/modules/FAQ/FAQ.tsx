import cn from "@/lib/cn";
import styles from "./faq.module.sass";
import Question from "./components/Question";
import ApplyNow from "../Navbar/components/ApplyNow";
import DownloadCurriculum from "../Navbar/components/DownloadCurriculum";
import { faqs } from "@/lib/data/faqs";
import SectionLayouts from "@/components/SectionLayouts";

const FAQ = () => {
  return (
    <SectionLayouts className={styles.section} id="faq" providePadding>
      <h1 className="white_text">FAQ</h1>
      <div className={styles.container}>
        {faqs.map((faq, i) => (
          <Question key={i} {...faq} />
        ))}
      </div>
      <div className="flex-col-mobile gap-1">
        <ApplyNow />
        <DownloadCurriculum />
      </div>
    </SectionLayouts>
  );
};

export default FAQ;
