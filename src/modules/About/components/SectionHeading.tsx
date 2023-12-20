import styles from "../about.module.sass";

type Props = {
  blackHeading: string;
  accentHeading?: string;
  whiteHeading?: string;
  children: React.ReactNode;
};

const SectionHeading = (props: Props) => {
  return (
    <div>
      <h1 className={styles.heading}>
        {props.blackHeading}{" "}
        <span className={styles.accent}>{props.accentHeading || ""}</span>
        <span className={styles.white}>{props.whiteHeading || ""}</span>
      </h1>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

export default SectionHeading;
