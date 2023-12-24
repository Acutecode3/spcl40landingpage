"use client";

import { useEffect, useState, useRef } from "react";

type Props = {
  n: number;
};

const Number = (props: Props) => {
  const targetNumber = props.n - 1;
  const durationInSeconds = 1.25;
  const [count, setCount] = useState(1);
  const countingRef = useRef<HTMLDivElement>(null);

  const startCounting = () => {
    const start = Date.now();
    const end = start + durationInSeconds * 1000;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min(1, (now - start) / (end - start));
      const nextCount = Math.floor(progress * targetNumber) + 1;
      setCount(nextCount);
      if (now < end) requestAnimationFrame(updateCount);
    };

    updateCount();
  };

  useEffect(() => {
    const cleanup = () => {
      if (countingRef.current) observer.unobserve(countingRef.current);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.intersectionRatio > 0)
            startCounting();
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.5 },
    );

    if (countingRef.current) {
      observer.observe(countingRef.current);
    }

    return cleanup;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countingRef.current]);

  return <span ref={countingRef}>{count}</span>;
};

export default Number;
