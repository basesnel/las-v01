import Section from "../Section/Section";
import Heading from "../Heading/Heading";

import styles from "./styles.module.css";

const Gallery = () => {
  return (
    <Section>
      <Heading level={2} title="introductions" />
      <p className={styles.date}>Welcome and introductions.</p>
    </Section>
  );
};

export default Gallery;
