import styles from "./meet.module.sass";
import SubHeading from "@/components/ui/SubHeading";
import cn from "@/lib/cn";
import Carousel from "./components/Carousel";

class Mentor {
  name: string;
  title: string;
  image: string;
  cardBg: string;
  constructor(name: string, title: string, image: string, cardBg: string) {
    this.name = name;
    this.title = title;
    this.image = image;
    this.cardBg = cardBg;
  }
}

export const mentors = [
  new Mentor(
    "Harshin Valamary",
    "Chartered Accountant",
    "/images/mentors/2.webp",
    "#B2DFDC"
  ),
  new Mentor(
    "Anjaly S Reji",
    "Chartered Accountant",
    "/images/mentors/1.webp",
    "#C0DFB2"
  ),
  new Mentor(
    "Anjana Thachil",
    "Chartered Accountant",
    "/images/mentors/3.webp",
    "#DFD2B2"
  ),
  new Mentor(
    "Harshin Valamary",
    "Chartered Accountant",
    "/images/mentors/2.webp",
    "#B2DFDC"
  ),
  new Mentor(
    "Anjaly S Reji",
    "Chartered Accountant",
    "/images/mentors/1.webp",
    "#C0DFB2"
  ),
  new Mentor(
    "Anjana Thachil",
    "Chartered Accountant",
    "/images/mentors/3.webp",
    "#DFD2B2"
  ),
];

const MeetTheMentors = () => {
  return (
    <section
      className={cn("provide_padding", styles.meet_mentors)}
      id="mentors"
    >
      <SubHeading
        blackText="Meet the"
        yellowText="mentors"
        stroke
        size="28px"
      />
      <Carousel />
    </section>
  );
};

export default MeetTheMentors;
