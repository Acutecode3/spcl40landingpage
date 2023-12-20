import styles from "../curriculum.module.sass";
import Aster from "./Aster";

type Props = {
  topics: string[];
};

const Content = (props: Props) => {
  return (
    <ul>
      {props.topics.map((topic, index) => (
        <li key={index} className={styles.topic}>
          <Aster />
          <span>{topic}</span>
        </li>
      ))}
    </ul>
  );
};

export default Content;
