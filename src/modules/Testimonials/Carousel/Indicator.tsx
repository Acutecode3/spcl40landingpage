import styles from "../testimonials.module.sass";

type Props = {
  totalCount: number;
  currentlyVisible: number;
};
const Indicator = (props: Props) => {
  return (
    <div className={styles.indicator}>
      {[...Array(props.totalCount)].map((_, index) => (
        <div
          key={index}
          className={
            index === props.currentlyVisible
              ? styles.indicator__active
              : styles.indicator__normal
          }
        ></div>
      ))}
    </div>
  );
};

export default Indicator;
