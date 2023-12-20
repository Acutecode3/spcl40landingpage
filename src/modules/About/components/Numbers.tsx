import styles from "../about.module.sass";
import Number from "./Number";

const Numbers = () => {
  return (
    <div className={styles.stat_container}>
      <div>
        <div className={styles.stats}>
          <Number n={24} /> years
        </div>
        <div className={styles.label}>EXPERIENCE</div>
      </div>
      <div>
        <div className={styles.stats}>
          <Number n={80} />+
        </div>
        <div className={styles.label}>CLIENTS</div>
      </div>
      <div>
        <div className={styles.stats}>
          <Number n={300} />+
        </div>
        <div className={styles.label}>STUDENTS MENTORED</div>
      </div>
    </div>
  );
};

export default Numbers;
