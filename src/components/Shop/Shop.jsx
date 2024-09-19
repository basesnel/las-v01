import Section from "../Section/Section";
import Subtitle from "../Subtitle/Subtitle";
import Heading from "../Heading/Heading";

import styles from "./styles.module.css";
import sections from "../../constants/sections";

const Shop = () => {
  const { id, section } = sections[4];
  const images = ["image", "image", "image", "image"];

  return (
    <Section part={id} variant="dark" label={section.uk}>
      <Subtitle>let's shoose your car</Subtitle>
      <Heading level={2} title="our shop of car" />
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

export default Shop;
