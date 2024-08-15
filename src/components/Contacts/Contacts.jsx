import Section from "../Section/Section";
import Heading from "../Heading/Heading";
import Subtitle from "../Subtitle/Subtitle";

import styles from "./styles.module.css";

const Contacts = () => {
  return (
    <Section part="contacts" variant="dark">
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
