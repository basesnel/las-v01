import Section from "../Section/Section";

import styles from "./styles.module.css";

const Contacts = () => {
  return (
    <Section>
      <h2 className={styles.title}>contacts</h2>
      <p className={styles.date}>Contact list.</p>
    </Section>
  );
};

export default Contacts;
