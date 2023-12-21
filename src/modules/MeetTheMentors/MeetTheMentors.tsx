import styles from "./meet.module.sass";
import SubHeading from "@/components/ui/SubHeading";
import Carousel from "./components/Carousel";
import SectionLayouts from "@/components/SectionLayouts";

const MeetTheMentors = () => {
  return (
    <SectionLayouts
      className={styles.meet_mentors}
      id="mentors"
      providePadding={false}
    >
      <div className="provide_padding">
        <SubHeading
          blackText="Meet the"
          yellowText="mentors"
          stroke
          size="28px"
        />
      </div>
      <Carousel />
    </SectionLayouts>
  );
};

export default MeetTheMentors;
