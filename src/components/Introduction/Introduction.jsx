import Section from "../Section/Section";
import Subtitle from "../Subtitle/Subtitle";
import Heading from "../Heading/Heading";

import styles from "./styles.module.css";

const Gallery = () => {
  return (
    <Section part="introduction">
      <Subtitle>about</Subtitle>
      <Heading level={2} title="introductions" />
      <p className={styles.date}>Welcome and introductions.</p>
    </Section>
  );
};

export default Gallery;
