import { useState, useEffect } from "react";
import useMeasure from "react-use-measure";
import {
  animate,
  AnimatePresence,
  motion,
  useMotionValue,
} from "framer-motion";
import Section from "../Section/Section";
import Container from "../Container/Container";
import Heading from "../Heading/Heading";
import Subtitle from "../Subtitle/Subtitle";

import gallery from "../../constants/gallery";

import styles from "./styles.module.css";

const Gallery = () => {
  const { subTitle, title, images } = gallery;

  return (
    <Section indexSection={6}>
      <Container>
        <Subtitle mode="gallery">{subTitle.uk}</Subtitle>
        <Heading level={2} mode="hidden" title={title.uk} />
        <GalleryList images={images} />
      </Container>
    </Section>
  );
};

const GalleryList = ({ images }) => {
  const FAST_DURATION = 60;
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
    <div className={styles.galleryContainer}>
      <motion.ul
        className={styles.galleryList}
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
          <li key={i}>
            <Card image={image} />
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

const Card = ({ image }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.figure
      className={styles.card}
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      <picture>
        <source
          srcSet={`${image.dtp1xWBP} 418w, ${image.dtp2xWBP} 836w, ${image.dtp3xWBP} 1254w, ${image.dtp4xWBP} 1672w`}
          sizes="418px"
          media="(min-width: 1200px)"
          width={418}
          height={360}
          type="image/webp"
        />

        <source
          srcSet={`${image.dtp1xJPG} 418w, ${image.dtp2xJPG} 836w, ${image.dtp3xJPG} 1254w, ${image.dtp4xJPG} 1672w`}
          sizes="418px"
          media="(min-width: 1200px)"
          width={418}
          height={360}
          type="image/jpeg"
        />

        <source
          srcSet={`${image.tab1xWBP} 330w, ${image.tab2xWBP} 660w, ${image.tab3xWBP} 990w, ${image.tab4xWBP} 1320w`}
          sizes="330px"
          media="(min-width: 768px) and (max-width: 1199px)"
          width={330}
          height={360}
          type="image/webp"
        />

        <source
          srcSet={`${image.tab1xJPG} 330w, ${image.tab2xJPG} 660w, ${image.tab3xJPG} 990w, ${image.tab4xJPG} 1320w`}
          sizes="330px"
          media="(min-width: 768px) and (max-width: 1199px)"
          width={330}
          height={360}
          type="image/jpeg"
        />

        <source
          srcSet={`${image.mob1xWBP} 270w, ${image.mob2xWBP} 540w, ${image.mob3xWBP} 810w, ${image.mob4xWBP} 1080w`}
          sizes="(max-width: 480px) calc(100vw - 110px), 270px"
          width={270}
          height={360}
          type="image/webp"
        />

        <img
          loading="lazy"
          srcSet={`${image.mob1xJPG} 270w, ${image.mob2xJPG} 540w, ${image.mob3xJPG} 810w, ${image.mob4xJPG} 1080w`}
          sizes="(max-width: 480px) calc(100vw - 110px), 270px"
          src={image.mob2xJPG}
          alt={image.alt.uk}
          width={270}
          height={360}
          className={styles.image}
        />
      </picture>
      <AnimatePresence>
        {showOverlay && (
          <motion.figcaption
            className={styles.cardOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <div className={styles.bgBlack} aria-hidden="true" />
            <motion.span
              className={styles.label}
              initial={{ y: 20 }}
              animate={{ y: 0, transition: { duration: 0.5 } }}
              exit={{ y: 20, transition: { duration: 0.5 } }}
            >
              {image.alt.uk}
            </motion.span>
          </motion.figcaption>
        )}
      </AnimatePresence>
    </motion.figure>
  );
};

export default Gallery;
