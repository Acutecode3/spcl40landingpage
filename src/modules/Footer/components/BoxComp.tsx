import Link from "next/link";
import styles from "../footer.module.sass";

type Props = {
  text: string | undefined;
  icon: React.FC;
  link: string;
};

const BoxComp = (props: Props) => {
  return (
    <Link href={props.link} className={styles.container}>
      <div className={styles.icon}>{<props.icon />}</div>
      <p className={styles.text}>{props.text || ""}</p>
    </Link>
  );
};

export default BoxComp;
