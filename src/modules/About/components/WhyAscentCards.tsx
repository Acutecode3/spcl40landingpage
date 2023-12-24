import Image from "next/image";
import styles from "../about.module.sass";
import cn from "@/lib/cn";
import { whyAscentCards } from "@/lib/data/whyAscentCards";

const WhyAscentCards = () => {
  return (
    <div className={cn(styles.why_cards, "flex-col-mobile")}>
      {whyAscentCards.map((card, index) => {
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
