import Section from "../Section/Section";

import styles from "./styles.module.css";

const Clients = () => {
  return (
    <Section>
      <h2 className={styles.title}>our clients</h2>
      <p className={styles.date}>List of car brands.</p>
    </Section>
  );
};

export default Clients;
