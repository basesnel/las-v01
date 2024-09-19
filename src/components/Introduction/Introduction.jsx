import Section from "../Section/Section";
import Subtitle from "../Subtitle/Subtitle";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";
import Reference from "../Reference/Reference";
import ABOUTS from "../../constants/about";
import sections from "../../constants/sections";

import styles from "./styles.module.css";

const Gallery = () => {
  const { id, section } = sections[1];

  return (
    <Section part={id} mode="intro" label={section.uk}>
      <div className={styles.content}>
        <Subtitle>about</Subtitle>
        <Heading level={2} mode="intro" title="introductions" />
        <Text mode="introWelcome">Welcome and introductions.</Text>
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
        <Reference type="button" caption="Contact us" mode="light" />
      </div>
      <aside className={styles.aside}>
        <ul className={styles.list}>
          {ABOUTS.map((ABOUT, i) => {
            return (
              <li key={i} className={styles.item}>
                <div className={styles.thumb}>
                  <picture>
                    <source
                      srcSet={ABOUT.deskWEBP}
                      media="(min-width: 1200px)"
                      type="image/webp"
                      width={270}
                      height={445}
                    />

                    <source
                      srcSet={ABOUT.deskJPG}
                      media="(min-width: 1200px)"
                      type="image/jpeg"
                      width={270}
                      height={445}
                    />

                    <source
                      srcSet={ABOUT.tabWEBP}
                      type="image/webp"
                      width={330}
                      height={235}
                    />

                    <img
                      loading="lazy"
                      src={ABOUT.tabJPG}
                      alt={ABOUT.alt}
                      width={330}
                      height={235}
                      className={styles.image}
                    />
                  </picture>
                </div>
              </li>
            );
          })}
        </ul>
      </aside>
    </Section>
  );
};

export default Gallery;
