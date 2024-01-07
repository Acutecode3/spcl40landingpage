import BrushStroke from "@/components/ui/BrushStroke";
import styles from "../form.module.sass";
import cn from "@/lib/cn";
import TimerIcon from "./TimerIcon";
import CountDown from "./CountDown";
import { formatDate } from "../helpers/formatDate";

const LeftSide = () => {
  const date = new Date(process.env.NEXT_PUBLIC_COUNTDOWN_DATE || "");
  return (
    <div className={styles.left}>
      <span className={styles.tag}>SPECIAL40</span>
      <div className={styles.sub_heading}>
        <h2>
          <span className="text-white">Unlock your Financial</span>{" "}
          <div>
            <span className="text-white">Potential with</span>{" "}
            <span className="text-blue">Ascent</span>
          </div>
        </h2>
        <BrushStroke />
      </div>
      <div className={cn(styles.clock, "flex-row items-center")}>
        <TimerIcon />
        <CountDown />
      </div>
      <div className={cn(styles.deadline, "flex-col")}>
        <span className={styles.dt}>Round 2 Deadline.</span>
        <span className={styles.dh}>
          {`${formatDate(date)}` || "January 2024"}
        </span>
      </div>
    </div>
  );
};

export default LeftSide;
