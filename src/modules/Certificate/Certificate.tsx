import Image from "next/image";
import SubHeading from "@/components/ui/SubHeading";
import styles from "./certificate.module.sass";
import ApplyNow from "../Navbar/components/ApplyNow";
import DownloadCurriculum from "../Navbar/components/DownloadCurriculum";
import cn from "@/lib/cn";

const Certificate = () => {
  return (
    <div className={styles.section}>
      <SubHeading blackText="Certificates" stroke={false} size="28px" />
      <div className={cn(styles.container, "blue_card")}>
        <Image
          src="/images/certificate.webp"
          width={565}
          height={400}
          alt="Special40 Certificate"
        />
      </div>
      <div className={styles.button_container}>
        <ApplyNow text="Enroll Now" />
        <DownloadCurriculum theme="light" />
      </div>
    </div>
  );
};

export default Certificate;
