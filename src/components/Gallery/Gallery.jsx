import Section from "../Section/Section";
import Heading from "../Heading/Heading";

import styles from "./styles.module.css";

const Gallery = () => {
  return (
    <Section>
      <Heading level={2} title="gallery" />
      <p className={styles.date}>List of pictures.</p>
    </Section>
  );
};

export default Gallery;
