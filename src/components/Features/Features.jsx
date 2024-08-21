import Section from "../Section/Section";
import Heading from "../Heading/Heading";
import Subtitle from "../Subtitle/Subtitle";
import benefits from "../../constants/benefits";

import styles from "./styles.module.css";

const Features = () => {
  return (
    <Section part="features" label="our benefits and features">
      <Subtitle>why people come to us?</Subtitle>
      <Heading level={2} title="our benefits" />
      <ul className={styles.list}>
        {benefits.map(({ amount, text }, i) => {
          return (
            <li key={i} className={styles.item}>
              <div className={styles.benefit}>
                <p className={styles.amount}>{amount}</p>
                <p className={styles.feature}>{text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Features;
