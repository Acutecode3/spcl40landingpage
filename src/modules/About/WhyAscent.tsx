import cn from "@/lib/cn";
import styles from "./about.module.sass";
import SectionHeading from "./components/SectionHeading";
import WhiteBrushStroke from "./components/WhiteBrushStroke";
import WhyAscentCards from "./components/WhyAscentCards";

const WhyAscent = () => {
  return (
    <section className={cn("provide_padding", styles.why_ascent)}>
      <SectionHeading blackHeading="Why" whiteHeading="Ascent?">
        <WhiteBrushStroke />
        <WhyAscentCards />
      </SectionHeading>
    </section>
  );
};

export default WhyAscent;
