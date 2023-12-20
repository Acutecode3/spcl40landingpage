import BrushStroke from "@/components/ui/BrushStroke";
import styles from "../home-hero.module.sass";
import cn from "@/lib/cn";

const Heading = () => {
  return (
    <>
      <h1>
        <span>Elevate your Finance </span>
        <span>Career </span>
        <span className="visible-mobile">with</span>
        <span className={cn("flex-col", styles.underline)}>
          <div>
            <span className="hidden-mobile">with </span>
            <span className={styles.ascent}>Special 40{"'"}s Ascent</span>
          </div>
          <span className={styles.brush}>
            <BrushStroke />
          </span>
        </span>
      </h1>
      <p>
        Gain hands-on working skills in Accounting, Taxation and GST and learn
        the practical application of various pivotal business concepts and
        software.
      </p>
    </>
  );
};

export default Heading;
