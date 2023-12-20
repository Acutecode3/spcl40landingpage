import cn from "@/lib/cn";
import styles from "./career-pathways.module.sass";

class CardDetail {
  constructor(
    public number: string,
    public title: string,
    public description: string
  ) {
    this.number = number;
    this.title = title;
    this.description = description;
  }
}
const CareerPathways = () => {
  const cards = [
    new CardDetail(
      "01",
      "Higher Studies",
      "For those who get inspired to learn more and invest their time now for greater returns and growth in the future."
    ),
    new CardDetail(
      "02",
      "Internship",
      "For those who wish to add more experience to what they have already gained here and build a career on that foundation."
    ),
    new CardDetail(
      "03",
      "Immediate Placement",
      "For graduates eager for immediate career entry, this path utilizes Special 40’s Ascent training for swift employment."
    ),
  ];
  return (
    <section
      className={cn(
        "provide_padding flex-col justify-center gap-1",
        styles.pathways
      )}
      id="career-path"
    >
      <div className={styles.title}>Career Pathways</div>
      <div className={styles.description}>
        Students of Special 40{"'"}s Ascent often find the two months{"'"}{" "}
        training to be eye-opening. They gain immense clarity on what career
        they want and where they want to be in the future. Although the
        destination is the same, they choose either of these three paths to
        reach there:
      </div>
      <div className={cn("flex-col-mobile", styles.cards)}>
        {cards.map((card) => {
          return (
            <div className={styles.card} key={card.number}>
              <div className={styles.cardNumber}>{card.number}</div>
              <div className={styles.cardTitle}>{card.title}</div>
              <div className={styles.cardDescription}>{card.description}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CareerPathways;
