import Section from "../Section/Section";
import Heading from "../Heading/Heading";

import styles from "./styles.module.css";

const Clients = () => {
  return (
    <Section>
      <Heading level={2} title="our clients" />
      <p className={styles.date}>List of car brands.</p>
    </Section>
  );
};

export default Clients;
