import Section from "../Section/Section";
import Heading from "../Heading/Heading";

import styles from "./styles.module.css";
import Subtitle from "../Subtitle/Subtitle";

const Contacts = () => {
  return (
    <Section>
      <Heading level={2} title="contacts" />
      <div className={styles.wrap}>
        <p className={styles.date}>Contact list.</p>
      </div>
      <Subtitle>working hours</Subtitle>
      <p>Monday-Saturday from 9:00 to 18:00</p>
    </Section>
  );
};

export default Contacts;
