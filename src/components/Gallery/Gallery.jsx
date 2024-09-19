import Section from "../Section/Section";
import Heading from "../Heading/Heading";
import Subtitle from "../Subtitle/Subtitle";
import sections from "../../constants/sections";

import styles from "./styles.module.css";

const Gallery = () => {
  const { id, section } = sections[6];
  const images = ["image", "image", "image", "image"];

  return (
    <Section part={id} label={section.uk}>
      <Subtitle>complex car repair</Subtitle>
      <Heading level={2} mode="hidden" title="gallery" />
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
