import Section from "../Section/Section";
import Heading from "../Heading/Heading";
import Subtitle from "../Subtitle/Subtitle";

import styles from "./styles.module.css";

const Automechanics = () => {
  return (
    <Section part="automechanics" variant="highlight">
      <Subtitle>true blacksmith of their craft</Subtitle>
      <Heading level={2} title="our mechanics" />
      <p className={styles.date}>List of auto-mechanics.</p>
    </Section>
  );
};

export default Automechanics;
