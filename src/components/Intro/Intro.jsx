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
                    {/* <picture>
                      <source
                        srcset="
                        ./images/about/desktop/about-img-1-270.webp  1200w,
                        ./images/about/desktop/about-img-1-540.webp  2400w,
                        ./images/about/desktop/about-img-1-810.webp  3600w,
                        ./images/about/desktop/about-img-1-1080.webp 4800w
                      "
                        media="(min-width: 1200px)"
                        type="image/webp"
                        width="270"
                        height="445"
                      />

                      <source
                        srcset="
                        ./images/about/desktop/about-img-1-270.jpg  1200w,
                        ./images/about/desktop/about-img-1-540.jpg  2400w,
                        ./images/about/desktop/about-img-1-810.jpg  3600w,
                        ./images/about/desktop/about-img-1-1080.jpg 4800w
                      "
                        media="(min-width: 1200px)"
                        type="image/jpeg"
                        width="270"
                        height="445"
                      />

                      <source
                        srcset="
                        ./images/about/tablet/about-img-1-330.webp   768w,
                        ./images/about/tablet/about-img-1-660.webp  1536w,
                        ./images/about/tablet/about-img-1-990.webp  2304w,
                        ./images/about/tablet/about-img-1-1320.webp 3072w
                      "
                        type="image/webp"
                        width="330"
                        height="235"
                      />

                      <img
                        srcset="
                        ./images/about/tablet/about-img-1-330.jpg   768w,
                        ./images/about/tablet/about-img-1-660.jpg  1536w,
                        ./images/about/tablet/about-img-1-990.jpg  2304w,
                        ./images/about/tablet/about-img-1-1320.jpg 3072w
                      "
                        src="./images/about/tablet/about-img-1-990.jpg"
                        alt="Image 1: shaving in the process"
                        width="330"
                        height="235"
                        class="about__image image"
                      />
                    </picture> */}
                    <picture>
                      {/* <source
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
                      /> */}

                      <source
                        srcSet={`${about.tab1xWBP} 768w, ${about.tab2xWBP} 1536w, ${about.tab3xWBP} 2304w, ${about.tab2xWBP} 2072w`}
                        width={330}
                        height={235}
                        type="image/webp"
                      />

                      <img
                        loading="lazy"
                        srcSet={`${about.tab1xJPG} 768w, ${about.tab2xJPG} 1536w, ${about.tab3xJPG} 2304w, ${about.tab2xJPG} 2072w`}
                        src={about.tab3xJPG}
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
