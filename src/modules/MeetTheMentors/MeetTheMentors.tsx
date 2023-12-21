import styles from "./meet.module.sass";
import SubHeading from "@/components/ui/SubHeading";
import Carousel from "./components/Carousel";

const MeetTheMentors = () => {
  return (
    <section className={styles.meet_mentors} id="mentors">
      <div className="provide_padding">
        <SubHeading
          blackText="Meet the"
          yellowText="mentors"
          stroke
          size="28px"
        />
      </div>
      <Carousel />
    </section>
  );
};

export default MeetTheMentors;
