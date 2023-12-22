import ThanksPageLayout from "@/components/ThanksPageLayout";
import BrushStroke from "@/components/ui/BrushStroke";
import cn from "@/lib/cn";
import styles from "@/modules/FormPage/form.module.sass";
import ArrowSVG from "@/modules/Navbar/components/ArrowSVG";
import Link from "next/link";

const Page = () => {
  return (
    <ThanksPageLayout>
      <section
        className={cn("provide_padding", styles.section, styles.thankYou)}
      >
        <div className={styles.shade}></div>
        <div className={styles.left}>
          <br />
          <br />
          <br />
          <span className={styles.tag}>SPECIAL40</span>
          <div className={styles.sub_heading}>
            <h2 className="text-white">Thank you for your entry</h2>
            <BrushStroke />
          </div>
          <p className="text-white thankyou-text">
            Gain hands-on working skills in Accounting, Taxation and GST and
            learn the practical application of various pivotal business concepts
            and software.
          </p>
          <Link className="apply_now" href="/">
            <span style={{ paddingLeft: "10px" }}>Go to homepage</span>
            <span className="apply_now_arrow">
              <ArrowSVG />
            </span>
          </Link>
        </div>
      </section>
    </ThanksPageLayout>
  );
};

export default Page;
