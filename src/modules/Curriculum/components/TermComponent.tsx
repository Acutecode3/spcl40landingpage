import styles from "../curriculum.module.sass";

type Props = {
  number: number;
};

const TermComponent = (props: Props) => {
  return (
    <div className={styles.term_container}>
      <span className={styles.circle}></span>
      <div className={styles.term}>TERM {props.number}</div>
    </div>
  );
};

export default TermComponent;
