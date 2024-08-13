import Section from "../Section/Section";
import Heading from "../Heading/Heading";

import styles from "./styles.module.css";

const Feedback = () => {
  return (
    <Section>
      <Heading level={2} title="feedback" />
      <p className={styles.date}>Form feedback.</p>
    </Section>
  );
};

export default Feedback;
