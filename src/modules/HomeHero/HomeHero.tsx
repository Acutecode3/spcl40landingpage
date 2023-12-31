import ApplyNow from "../Navbar/components/ApplyNow";
import DownloadCurriculum from "../Navbar/components/DownloadCurriculum";
import styles from "./home-hero.module.sass";
import Heading from "./components/Heading";
import CardIcon from "./components/CardIcon";
import { Cohort, Duration, Format, Mode } from "./components/Icons";
import IntroVideo from "./components/IntroVideo";
import { HomeHeroVideoLink } from "@/lib/data/data";
import SectionLayouts from "@/components/SectionLayouts";

type Props = {
  showHero?: boolean;
  showCards?: boolean;
};

const HomeHero = (props: Props) => {
  return (
    <SectionLayouts className={styles.section} id="highlights" providePadding>
      {props.showHero && (
        <div className={styles.top_section}>
          <div className={styles.section1}>
            <Heading />
          </div>
          <IntroVideo link={HomeHeroVideoLink} />
          <div className={styles.section2}>
            <ApplyNow text="Enroll Now" />
            <DownloadCurriculum />
          </div>
        </div>
      )}
      {props.showCards && (
        <div className={styles.bottom_section}>
          <CardIcon heading="duration" text="2 months" Icon={Duration} />
          <CardIcon heading="mode" text="Offline" Icon={Mode} />
          <CardIcon heading="format" text="Hands-on" Icon={Format} />
          <CardIcon heading="cohort" text="January 20, 2024" Icon={Cohort} />
        </div>
      )}
    </SectionLayouts>
  );
};

export default HomeHero;
