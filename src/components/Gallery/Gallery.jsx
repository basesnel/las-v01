import Section from "../Section/Section";

import styles from "./styles.module.css";

const Gallery = () => {
  return (
    <Section>
      <h2 className={styles.title}>Gallery</h2>
      <p className={styles.date}>List of pictures.</p>
    </Section>
  );
};

export default Gallery;
