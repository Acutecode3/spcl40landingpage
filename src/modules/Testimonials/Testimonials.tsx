"use client";

import cn from "@/lib/cn";
import styles from "./testimonials.module.sass";
import SubHeading from "@/components/ui/SubHeading";
import Carousel from "./Carousel/Carousel";
import dynamic from "next/dynamic";

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className="provide_padding">
        <SubHeading
          blackText="Hear it from our"
          yellowText="students"
          stroke={false}
          size="28px"
        />
      </div>
      <Carousel />
    </section>
  );
};

// export default Testimonials;

export default dynamic(() => Promise.resolve(Testimonials), { ssr: false });
