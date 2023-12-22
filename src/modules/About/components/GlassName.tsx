import cn from "@/lib/cn";
import styles from "../about.module.sass";
import PersonIcon from "./PersonIcon";

const GlassName = () => {
  return (
    <div className={cn("absolute flex-row items-center", styles.glass)}>
      <div>
        <PersonIcon />
      </div>
      <div>
        <h1 className={styles.glass_name}>Sreejith Kuniyil</h1>
        <h2 className={styles.glass_title}>Chartered Accountant</h2>
      </div>
    </div>
  );
};

export default GlassName;
