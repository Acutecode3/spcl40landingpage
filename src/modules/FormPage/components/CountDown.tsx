"use client";

import dynamic from "next/dynamic";
import styles from "../form.module.sass";
import { useEffect, useState } from "react";
import { countDownDate } from "@/lib/data/data";

const CountDown = () => {
  const targetDate = countDownDate;
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = new Date(targetDate).getTime() - now.getTime();

    if (difference > 0 || !isNaN(new Date(targetDate).getTime())) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, targetDate]);

  if (!targetDate) return <></>;
  return (
    <>
      <div className="flex-col">
        <span className={styles.n}>{timeLeft.days}</span>
        <span className={styles.d}>Days</span>
      </div>
      <div className="flex-col">
        <span className={styles.n}>
          {timeLeft.hours < 10 ? "0" : ""}
          {timeLeft.hours}
        </span>
        <span className={styles.d}>Hours</span>
      </div>
      <div className="flex-col">
        <span className={styles.n}>
          {timeLeft.minutes < 10 ? "0" : ""}
          {timeLeft.minutes}
        </span>
        <span className={styles.d}>Minutes</span>
      </div>
      <div className="flex-col">
        <span className={styles.n}>
          {timeLeft.seconds < 10 ? "0" : ""}
          {timeLeft.seconds}
        </span>
        <span className={styles.d}>Seconds</span>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(CountDown), {
  ssr: false,
});
