import Section from "../Section/Section";
import Subtitle from "../Subtitle/Subtitle";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";
import Reference from "../Reference/Reference";
import intro from "../../constants/intro";

import styles from "./styles.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

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

  const [images, setImages] = useState(abouts);

  // console.log(images);

  // var shuffle = (a) =>
  //   a.length ? a.splice(~~(Math.random() * a.length), 1).concat(shuffle(a)) : a;

  // const shuffle = (a) => {
  //   return a
  //     .map((value) => ({ value, sort: Math.random() }))
  //     .sort((a, b) => a.sort - b.sort)
  //     .map(({ value }) => value);
  // };

  // console.log("Shuffle out of Effect:", shuffle(images));

  const intervalId = useRef(null);

  useEffect(() => {
    const shuffle = (a) => {
      return a
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    };

    intervalId.current = setInterval(() => {
      setImages((prevImages) => [...shuffle(prevImages)]);
      console.log("Effect images:", images);
    }, 10000);

    return () => {
      console.log("This is clear function to the effect trigger");
      console.log("Images on clear effect:", images);
      clearInterval(intervalId.current);
    };
  }, []);

  return (
    <Section indexSection={1} containerVariant="intro">
      <div className={styles.content}>
        <Subtitle>{subTitle.uk}</Subtitle>
        <Heading level={2} mode="intro" title={title.uk} />
        <Text mode="introWelcome">{preText.uk}</Text>
        <Text mode="intro">{firstText.uk}</Text>
        <Text mode="intro">{secondText.uk}</Text>
        <Text mode="intro">{thirdText.uk}</Text>
        <Reference src="#contact-us" caption={reference.uk} />
      </div>
      <aside className={styles.aside}>
        <ul className={styles.list}>
          {images.map((about) => {
            return (
              <li key={about.id} className={styles.item}>
                <div className={styles.thumb}>
                  <picture>
                    <source
                      srcSet={`${about.dtp1xWBP} 1200w, ${about.dtp2xWBP} 2400w, ${about.dtp3xWBP} 3600w, ${about.dtp2xWBP} 4800w`}
                      media="(min-width: 1200px)"
                      width={270}
                      height={445}
                      type="image/webp"
                    />

                    <source
                      srcSet={`${about.dtp1xJPG} 1200w, ${about.dtp2xJPG} 2400w, ${about.dtp3xJPG} 3600w, ${about.dtp2xJPG} 4800w`}
                      media="(min-width: 1200px)"
                      width={270}
                      height={445}
                      type="image/jpeg"
                    />

                    <source
                      srcSet={`${about.tab1xWBP} 768w, ${about.tab2xWBP} 1536w, ${about.tab3xWBP} 2304w, ${about.tab2xWBP} 3072w`}
                      width={330}
                      height={235}
                      type="image/webp"
                    />

                    <img
                      loading="lazy"
                      srcSet={`${about.tab1xJPG} 768w, ${about.tab2xJPG} 1536w, ${about.tab3xJPG} 2304w, ${about.tab2xJPG} 3072w`}
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
          {/* {abouts.map((about) => {
            return (
              <li key={about.id} className={styles.item}>
                <div className={styles.thumb}>
                  <picture>
                    <source
                      srcSet={`${about.dtp1xWBP} 1200w, ${about.dtp2xWBP} 2400w, ${about.dtp3xWBP} 3600w, ${about.dtp2xWBP} 4800w`}
                      media="(min-width: 1200px)"
                      width={270}
                      height={445}
                      type="image/webp"
                    />

                    <source
                      srcSet={`${about.dtp1xJPG} 1200w, ${about.dtp2xJPG} 2400w, ${about.dtp3xJPG} 3600w, ${about.dtp2xJPG} 4800w`}
                      media="(min-width: 1200px)"
                      width={270}
                      height={445}
                      type="image/jpeg"
                    />

                    <source
                      srcSet={`${about.tab1xWBP} 768w, ${about.tab2xWBP} 1536w, ${about.tab3xWBP} 2304w, ${about.tab2xWBP} 3072w`}
                      width={330}
                      height={235}
                      type="image/webp"
                    />

                    <img
                      loading="lazy"
                      srcSet={`${about.tab1xJPG} 768w, ${about.tab2xJPG} 1536w, ${about.tab3xJPG} 2304w, ${about.tab2xJPG} 3072w`}
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
          })} */}
        </ul>
      </aside>
    </Section>
  );
};

export default Intro;
