import Section from "../Section/Section";

import styles from "./styles.module.css";

const Gallery = () => {
  return (
    <Section>
      <h2 className={styles.title}>Introductions</h2>
      <p className={styles.date}>Welcome and introductions.</p>
    </Section>
  );
};

export default Gallery;
