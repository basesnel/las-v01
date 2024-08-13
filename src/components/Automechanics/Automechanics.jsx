import Section from "../Section/Section";
import Heading from "../Heading/Heading";

import styles from "./styles.module.css";

const Automechanics = () => {
  return (
    <Section>
      <Heading level={2} title="auto-mechanics" />
      <p className={styles.date}>List of workers.</p>
    </Section>
  );
};

export default Automechanics;
