import cn from "@/lib/cn";
import styles from "./career-pathways.module.sass";
import { careerPathwaysData } from "@/lib/data/careerPathways";
import SectionLayouts from "@/components/SectionLayouts";

const CareerPathways = () => {
  return (
    <SectionLayouts
      id="career-path"
      className={cn(styles.pathways, " flex-col justify-center gap-1")}
      providePadding
    >
      <div className={styles.title}>Career Pathways</div>
      <div className={styles.description}>
        Students of Special 40{"'"}s Ascent often find the two months{"'"}{" "}
        training to be eye-opening. They gain immense clarity on what career
        they want and where they want to be in the future. Although the
        destination is the same, they choose one of these three paths to reach
        there:
      </div>
      <div className={cn("flex-col-mobile", styles.cards)}>
        {careerPathwaysData.map((card) => {
          return (
            <div className={styles.card} key={card.number}>
              <div className={styles.cardNumber}>{card.number}</div>
              <div className={styles.cardTitle}>{card.title}</div>
              <div className={styles.cardDescription}>{card.description}</div>
            </div>
          );
        })}
      </div>
    </SectionLayouts>
  );
};

export default CareerPathways;
