import Section from "../Section/Section";
import Subtitle from "../Subtitle/Subtitle";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";
import Reference from "../Reference/Reference";
import intro from "../../constants/intro";

import styles from "./styles.module.css";

const Intro = () => {
  const {
    subTitle,
    title,
    preText,
    firstText,
    secondText,
    thirdText,
    reference,
    abouts,
  } = intro;

  return (
    <Section indexSection={1} containerVariant="intro">
      <div className={styles.content}>
        <Subtitle>{subTitle.uk}</Subtitle>
        <Heading level={2} mode="intro" title={title.uk} />
        <Text mode="introWelcome">{preText.uk}</Text>
        <Text mode="intro">{firstText.uk}</Text>
        <Text mode="intro">{secondText.uk}</Text>
        <Text mode="intro">{thirdText.uk}</Text>
        <Reference type="button" caption={reference.uk} mode="light" />
      </div>
      <aside className={styles.aside}>
        <ul className={styles.list}>
          {abouts.map((about, i) => {
            if (i < 2)
              return (
                <li key={i} className={styles.item}>
                  <div className={styles.thumb}>
                    <picture>
                      <source
                        srcSet={about.deskWEBP}
                        media="(min-width: 1200px)"
                        type="image/webp"
                        width={270}
                        height={445}
                      />

                      <source
                        srcSet={about.deskJPG}
                        media="(min-width: 1200px)"
                        type="image/jpeg"
                        width={270}
                        height={445}
                      />

                      <source
                        srcSet={about.tabWEBP}
                        type="image/webp"
                        width={330}
                        height={235}
                      />

                      <img
                        loading="lazy"
                        src={about.tabJPG}
                        alt={about.alt.uk}
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

export default Intro;
