import cn from "@/lib/cn";
import styles from "./applicationProcess.module.sass";
import { applicationProcess } from "@/lib/data/applicationProcess";

const ApplicationProcess = () => {
  return (
    <section
      className={cn("provide_padding", styles.section)}
      id="application-process"
    >
      <h1 className="white_text">
        <span>Application</span>{" "}
        <span className="blue_text">Process and Timeline</span>
      </h1>
      <div className={cn(styles.cards, "flex-col-mobile gap-1")}>
        {applicationProcess.map((process) => {
          return (
            <div className={styles.card} key={process.number}>
              <div className={styles.card_step}>STEP {process.number}</div>
              <h2 className={styles.card_header}>{process.name}</h2>
              <p className={styles.card_p}>{process.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ApplicationProcess;
