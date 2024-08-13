import Section from "../Section/Section";
import Heading from "../Heading/Heading";

import styles from "./styles.module.css";

const Features = () => {
  return (
    <Section>
      <Heading level={2} title="our benefits" />
      <p className={styles.date}>List of benefits.</p>
    </Section>
  );
};

export default Features;
