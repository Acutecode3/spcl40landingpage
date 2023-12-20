import SubHeading from "@/components/ui/SubHeading";
import styles from "./feesFinancing.module.sass";
import cn from "@/lib/cn";
import Image from "next/image";
import ProgrammeDetails from "./components/ProgrammeDetails";

const FeesFinancing = () => {
  return (
    <section
      className={cn("provide_padding", styles.section)}
      id="fees-and-finance"
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
          <div className={styles.slider}>
            <div className={styles.slide}>
              <Image
                src="/images/certificate.webp"
                alt="slide1"
                height={610}
                width={500}
              />
            </div>
            <div className={styles.slide}>
              <Image
                src="/images/certificate.webp"
                alt="slide2"
                height={610}
                width={500}
              />
            </div>
          </div>
        </div>
        <div className={styles.details}>
          <ProgrammeDetails />
        </div>
      </div>
    </section>
  );
};

export default FeesFinancing;
