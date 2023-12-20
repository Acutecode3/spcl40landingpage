import Image from "next/image";
import styles from "../about.module.sass";
import cn from "@/lib/cn";

class CardDetail {
  constructor(
    public title: string,
    public description: string,
    public image: string
  ) {
    this.title = title;
    this.description = description;
    this.image = image;
  }
}

const WhyAscentCards = () => {
  const cards = [
    new CardDetail(
      "Practical Commerce Education",
      "Focuses on real-world skills in Accounting, Taxation, and Business.",
      "/icons/why/education.png"
    ),
    new CardDetail(
      "Ideal for Aspiring Professionals",
      "Suitable for commerce graduates and ACCA/CMA students.",
      "/icons/why/experience.png"
    ),
    new CardDetail(
      "Expert-Led Training Sessions",
      "Taught by working Chartered Accountants and CAPITAIRE's qualified professionals.",
      "/icons/why/professionals.png"
    ),
    new CardDetail(
      "Real Office Experience",
      " Opportunity to handle actual client files and accounts in a professional environment.",
      "/icons/why/training.png"
    ),
  ];
  return (
    <div className={cn(styles.why_cards, "flex-col-mobile")}>
      {cards.map((card, index) => {
        return (
          <article
            key={index}
            className={cn(styles.why_card, "flex-col flex-1")}
          >
            <div className={styles.card_icons}>
              <Image src={card.image} alt={card.title} height={70} width={70} />
            </div>
            <h2 className={styles.h}>{card.title}</h2>
            <p className={styles.p}>{card.description}</p>
          </article>
        );
      })}
    </div>
  );
};

export default WhyAscentCards;
