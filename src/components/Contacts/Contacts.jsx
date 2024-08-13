import Section from "../Section/Section";
import Heading from "../Heading/Heading";

import styles from "./styles.module.css";

const Contacts = () => {
  return (
    <Section>
      <Heading level={2} title="contacts" />
      <p className={styles.date}>Contact list.</p>
    </Section>
  );
};

export default Contacts;
