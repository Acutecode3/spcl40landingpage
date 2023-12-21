"use client";

import { useEffect, useRef, useState } from "react";
import SubHeading from "@/components/ui/SubHeading";
import styles from "./feesFinancing.module.sass";
import cn from "@/lib/cn";
import Image from "next/image";
import ProgrammeDetails from "./components/ProgrammeDetails";
import LeftArrow from "./components/Arrow";
import { feesFinancingImages } from "@/lib/data/data";
import SectionLayouts from "@/components/SectionLayouts";

const FeesFinancing = () => {
  const slideRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const count = feesFinancingImages.length;
  const goLeft = () => {
    const prevIndex = index === 0 ? count - 1 : index - 1;
    setIndex(prevIndex);
  };
  const goRight = () => {
    const nextIndex = index === count - 1 ? 0 : index + 1;
    setIndex(nextIndex);
  };

  useEffect(() => {
    if (slideRef.current && sliderRef.current) {
      const slideWidth = slideRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      });
    }
  }, [index]);

  return (
    <SectionLayouts
      className={styles.section}
      id="fees-and-finance"
      providePadding
    >
      <SubHeading
        blackText=""
        whiteText="Fees and"
        yellowText="Financing"
        size="30px"
        stroke
      />
      <div className={styles.container}>
        <div className={styles.carousel}>
          <div className={styles.controls}>
            <LeftArrow onClick={goLeft} />
            <LeftArrow isRight onClick={goRight} />
          </div>
          <div className={styles.slider} ref={sliderRef}>
            {feesFinancingImages.map((img, i) => (
              <div key={i} className={styles.slide} ref={slideRef}>
                {img && (
                  <Image src={img} alt="Special40" height={610} width={500} />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.details}>
          <ProgrammeDetails />
        </div>
      </div>
    </SectionLayouts>
  );
};

export default FeesFinancing;
