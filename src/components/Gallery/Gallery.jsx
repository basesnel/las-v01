import { useState } from "react";
import useMeasure from "react-use-measure";
import {
  animate,
  AnimatePresence,
  motion,
  useMotionValue,
} from "framer-motion";
import Section from "../Section/Section";
import Heading from "../Heading/Heading";
import Subtitle from "../Subtitle/Subtitle";
import gallery from "../../constants/gallery";

import styles from "./styles.module.css";
import Container from "../Container/Container";
import { useEffect } from "react";

const Gallery = () => {
  const { subTitle, title, images } = gallery;

  const FAST_DURATION = 240;
  const SLOW_DURATION = 600;

  const [duration, setDuration] = useState(FAST_DURATION);

  let [ref, { width }] = useMeasure();

  const xTransition = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 12;

    if (mustFinish) {
      controls = animate(xTransition, [xTransition.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTransition.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTransition, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls.stop;
  }, [xTransition, width, duration, rerender]);

  return (
    <Section indexSection={6}>
      <Container>
        <Subtitle mode="gallery">{subTitle.uk}</Subtitle>
        <Heading level={2} mode="hidden" title={title.uk} />
      </Container>
      <div className={styles.wrapper}>
        <motion.div
          className={styles.galleryContainer}
          ref={ref}
          style={{ x: xTransition }}
          onHoverStart={() => {
            setMustFinish(true);
            setDuration(SLOW_DURATION);
          }}
          onHoverEnd={() => {
            setMustFinish(true);
            setDuration(FAST_DURATION);
          }}
        >
          {[...images, ...images].map((image, i) => (
            <Card key={i} image={image} />
          ))}
        </motion.div>
      </div>
      {/* <ul className={styles.list}>
        {images.map((image, i) => (
          <li key={i} className={styles.item}>
            <div className={styles.thumb}>
              <picture>
                <source
                  srcSet={`${image.dtp1xWBP} 1200w, ${image.dtp2xWBP} 2400w, ${image.dtp3xWBP} 3600w, ${image.dtp2xWBP} 4800w`}
                  media="(min-width: 1200px)"
                  width={270}
                  height={360}
                  type="image/webp"
                />

                <source
                  srcSet={`${image.dtp1xJPG} 1200w, ${image.dtp2xJPG} 2400w, ${image.dtp3xJPG} 3600w, ${image.dtp2xJPG} 4800w`}
                  media="(min-width: 1200px)"
                  width={270}
                  height={360}
                  type="image/jpeg"
                />

                <source
                  srcSet={`${image.tab1xWBP} 768w, ${image.tab2xWBP} 1536w, ${image.tab3xWBP} 2304w, ${image.tab2xWBP} 3072w`}
                  media="(min-width: 768px) and (max-width: 1199px)"
                  width={330}
                  height={360}
                  type="image/webp"
                />

                <source
                  srcSet={`${image.tab1xJPG} 768w, ${image.tab2xJPG} 1536w, ${image.tab3xJPG} 2304w, ${image.tab2xJPG} 3072w`}
                  media="(min-width: 768px) and (max-width: 1199px)"
                  width={330}
                  height={360}
                  type="image/jpeg"
                />

                <source
                  srcSet={`${image.mob1xWBP} 480w, ${image.mob2xWBP} 960w, ${image.mob3xWBP} 1440w, ${image.mob2xWBP} 1920w`}
                  width={418}
                  height={360}
                  type="image/webp"
                />

                <img
                  loading="lazy"
                  srcSet={`${image.mob1xJPG} 480w, ${image.mob2xJPG} 960w, ${image.mob3xJPG} 1440w, ${image.mob2xJPG} 1920w`}
                  src={image.mob2xJPG}
                  alt={image.alt.uk}
                  width={418}
                  height={360}
                  className={styles.image}
                />
              </picture>
            </div>
          </li>
        ))}
      </ul> */}
    </Section>
  );
};

const Card = ({ image }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.div
      className={styles.card}
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className={styles.cardOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <div className={styles.bgBlack} />
            <motion.span
              className={styles.label}
              initial={{ y: 20 }}
              animate={{ y: 0, transition: { duration: 0.5 } }}
              exit={{ y: 20, transition: { duration: 0.5 } }}
            >
              {image.alt.uk}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
      <picture>
        <source
          srcSet={`${image.dtp1xWBP} 1200w, ${image.dtp2xWBP} 2400w, ${image.dtp3xWBP} 3600w, ${image.dtp2xWBP} 4800w`}
          media="(min-width: 1200px)"
          width={270}
          height={360}
          type="image/webp"
        />

        <source
          srcSet={`${image.dtp1xJPG} 1200w, ${image.dtp2xJPG} 2400w, ${image.dtp3xJPG} 3600w, ${image.dtp2xJPG} 4800w`}
          media="(min-width: 1200px)"
          width={270}
          height={360}
          type="image/jpeg"
        />

        <source
          srcSet={`${image.tab1xWBP} 768w, ${image.tab2xWBP} 1536w, ${image.tab3xWBP} 2304w, ${image.tab2xWBP} 3072w`}
          media="(min-width: 768px) and (max-width: 1199px)"
          width={330}
          height={360}
          type="image/webp"
        />

        <source
          srcSet={`${image.tab1xJPG} 768w, ${image.tab2xJPG} 1536w, ${image.tab3xJPG} 2304w, ${image.tab2xJPG} 3072w`}
          media="(min-width: 768px) and (max-width: 1199px)"
          width={330}
          height={360}
          type="image/jpeg"
        />

        <source
          srcSet={`${image.mob1xWBP} 480w, ${image.mob2xWBP} 960w, ${image.mob3xWBP} 1440w, ${image.mob2xWBP} 1920w`}
          width={418}
          height={360}
          type="image/webp"
        />

        <img
          loading="lazy"
          srcSet={`${image.mob1xJPG} 480w, ${image.mob2xJPG} 960w, ${image.mob3xJPG} 1440w, ${image.mob2xJPG} 1920w`}
          src={image.mob2xJPG}
          alt={image.alt.uk}
          width={418}
          height={360}
          className={styles.image}
        />
      </picture>
    </motion.div>
  );
};

export default Gallery;
