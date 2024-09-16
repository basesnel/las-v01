import Section from "../Section/Section";
import Subtitle from "../Subtitle/Subtitle";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";
import ABOUT from "../../constants/about";

import styles from "./styles.module.css";

const Gallery = () => {
  return (
    <Section part="introduction" label="invitation">
      <div className={styles.content}>
        <Subtitle>about</Subtitle>
        <Heading level={2} title="introductions" />
        <Text>Welcome and introductions.</Text>
        <Text mode="intro">
          Our company provides a full range of services for the maintenance and
          repair of cars of well-known brands and models.
        </Text>
        <Text mode="intro">
          A team of professionals is ready to help you not only with the
          maintenance and repair of your car, but also provide painting and
          detailing services.
        </Text>
        <Text mode="intro">
          We pay special attention to the quality and speed of our services, so
          you can be sure that your car will be in good hands.
        </Text>
      </div>
      <aside className={styles.aside}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.thumb}>
              <picture>
                <img
                  loading="lazy"
                  src={ABOUT[0].tabJPG}
                  alt={ABOUT[0].alt}
                  width={330}
                  height={235}
                  className={styles.image}
                />
              </picture>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.thumb}>
              <picture>
                <img
                  loading="lazy"
                  src={ABOUT[1].tabJPG}
                  alt={ABOUT[1].alt}
                  width={330}
                  height={235}
                  className={styles.image}
                />
              </picture>
            </div>
          </li>
        </ul>
      </aside>
    </Section>
  );
};

export default Gallery;
