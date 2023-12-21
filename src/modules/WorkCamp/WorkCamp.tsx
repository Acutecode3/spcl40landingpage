import cn from "@/lib/cn";
import styles from "./workcamp.module.sass";
import SubHeading from "@/components/ui/SubHeading";
import IntroVideo from "../HomeHero/components/IntroVideo";
import ApplyNow from "../Navbar/components/ApplyNow";
import { TwoWeeksWorkVideoLink } from "@/lib/data/data";

const WorkCamp = () => {
  return (
    <section className={cn("provide_padding", styles.section)}>
      <div className={styles.section1}>
        <SubHeading
          stroke
          size="26px"
          blackText="Two-week"
          yellowText="FinTax Camp"
        />
        <p className={styles.text}>
          Our programme includes a two-week office training segment that
          provides a chance to apply the skills acquired from Special 40{"'"}s
          Ascent to real client files in a real office environment. This enables
          you to gain hands-on experience in executing a variety of tasks
          relevant to your role as an accountant in an organisation.
        </p>
        <ApplyNow text="Enroll Now" />
      </div>
      <IntroVideo link={TwoWeeksWorkVideoLink} />
    </section>
  );
};

export default WorkCamp;
