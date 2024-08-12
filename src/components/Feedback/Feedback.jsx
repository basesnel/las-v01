import Section from "../Section/Section";

import styles from "./styles.module.css";

const Feedback = () => {
  return (
    <Section>
      <h2 className={styles.title}>Feed</h2>
      <p className={styles.date}>Form feedback.</p>
    </Section>
  );
};

export default Feedback;
