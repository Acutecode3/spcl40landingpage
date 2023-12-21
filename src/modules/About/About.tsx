import cn from "@/lib/cn";
import Image from "next/image";
import styles from "./about.module.sass";
import SectionHeading from "./components/SectionHeading";
import ApplyNow from "../Navbar/components/ApplyNow";
import Story from "./components/Story";
import FaceBehind from "./components/FaceBehind";
import GlassName from "./components/GlassName";
import { useNavbarContext } from "@/contexts/ActiveNavbarContext";
import SectionLayouts from "@/components/SectionLayouts";

const About = () => {
  return (
    <SectionLayouts id="about" className={styles.section} providePadding>
      <div className={styles.black}></div>
      <div className={styles.image_container}>
        <Image
          src="/images/about_image.png"
          alt="Picture of the author"
          width={1095}
          height={500}
        />
      </div>
      <article className={styles.our_story}>
        <SectionHeading blackHeading="Our" accentHeading="Story">
          <Story />
          <ApplyNow text="Enroll Now" />
        </SectionHeading>
      </article>
      <article className={styles.face_behind}>
        <div className={cn(styles.portrait, "blue_card")}>
          <Image
            src="/images/sreejith_kunyil.png"
            alt="Picture of the author"
            width={700}
            height={574}
          />
          <GlassName />
        </div>
        <SectionHeading
          blackHeading="The face behind"
          accentHeading="Special40"
        >
          <FaceBehind />
        </SectionHeading>
      </article>
    </SectionLayouts>
  );
};

export default About;
