import Section from "../Section/Section";
import Heading from "../Heading/Heading";
import Subtitle from "../Subtitle/Subtitle";

import styles from "./styles.module.css";

const Gallery = () => {
  const images = ["image", "image", "image", "image"];

  return (
    <Section part="gallery" label="our work">
      <Subtitle>complex car repair</Subtitle>
      <Heading level={2} mode="gallery" title="gallery" />
      <ul>
        {images.map((image, i) => (
          <li key={i} className={styles.item}>
            <div className={styles.thumb}>
              <p className={styles.inner}>{`${image} ${i}`}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Gallery;
