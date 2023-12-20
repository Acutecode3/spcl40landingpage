import cn from "@/lib/cn";
import styles from "../home-hero.module.sass";

type Props = {
  heading: string;
  text: string;
  Icon: React.FC;
};
const CardIcon = (props: Props) => {
  return (
    <div className={cn("flex-col", styles.card)}>
      <span className={styles.card_icon}>
        <props.Icon />
      </span>
      <span className={cn("uppercase", styles.card_heading)}>
        {props.heading}
      </span>
      <span className={styles.card_text}>{props.text}</span>
    </div>
  );
};

export default CardIcon;
