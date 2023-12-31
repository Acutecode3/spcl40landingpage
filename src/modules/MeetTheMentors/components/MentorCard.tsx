import Image from "next/image";
import styles from "../meet.module.sass";

type Props = {
  name: string;
  title: string;
  image: string;
  cardBg: string;
  videoRef: React.RefObject<HTMLDivElement>;
};

const MentorCard = (props: Props) => {
  return (
    <div className={styles.card} ref={props.videoRef}>
      <div
        style={{ backgroundColor: props.cardBg }}
        className={styles.image_container}
      >
        <Image src={props.image} width={600} height={600} alt={props.name} />
      </div>
      <div className={styles.subtitle}>
        <p className={styles.name}>{props.name}</p>
        <p className={styles.title}>{props.title}</p>
      </div>
    </div>
  );
};

export default MentorCard;
