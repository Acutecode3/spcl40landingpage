"use client";

import cn from "@/lib/cn";
import styles from "./testimonials.module.sass";
import SubHeading from "@/components/ui/SubHeading";
import Carousel from "./Carousel/Carousel";
import dynamic from "next/dynamic";

const Testimonials = () => {
  return (
    <section className={cn("provide_padding", styles.testimonials)}>
      <SubHeading
        blackText="Hear it from our"
        yellowText="students"
        stroke={false}
        size="28px"
      />
      <Carousel />
    </section>
  );
};

// export default Testimonials;

export default dynamic(() => Promise.resolve(Testimonials), { ssr: false });
