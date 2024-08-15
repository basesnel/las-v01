import Section from "../Section/Section";
import Heading from "../Heading/Heading";
import Subtitle from "../Subtitle/Subtitle";

import styles from "./styles.module.css";

const Gallery = () => {
  return (
    <Section part="gallery">
      <Subtitle>complex car repair</Subtitle>
      <Heading level={2} title="gallery" />
      <p className={styles.date}>List of pictures.</p>
    </Section>
  );
};

export default Gallery;
