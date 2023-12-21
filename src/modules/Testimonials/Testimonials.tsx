"use client";

import styles from "./testimonials.module.sass";
import SubHeading from "@/components/ui/SubHeading";
import Carousel from "./Carousel/Carousel";
import dynamic from "next/dynamic";
import SectionLayouts from "@/components/SectionLayouts";

const Testimonials = () => {
  return (
    <SectionLayouts
      className={styles.testimonials}
      id="testimonials"
      providePadding={false}
    >
      <div className="provide_padding">
        <SubHeading
          blackText="Hear it from our"
          yellowText="students"
          stroke={false}
          size="28px"
        />
      </div>
      <Carousel />
    </SectionLayouts>
  );
};

// export default Testimonials;

export default dynamic(() => Promise.resolve(Testimonials), { ssr: false });
