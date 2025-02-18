import { useState, useEffect, useRef } from "react";
import useMeasure from "react-use-measure";
import {
  animate,
  useInView,
  motion,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import Section from "../Section/Section";
import Subtitle from "../Subtitle/Subtitle";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";
import Reference from "../Reference/Reference";

import towtruck from "../../constants/towtruck";

import styles from "./styles.module.css";

const spring = {
  type: "spring",
  dumping: 20,
  stiffness: 100,
};

const TowTruck = () => {
  const {
    subTitle,
    title,
    preText,
    firstText,
    transports,
    secondText,
    suggests,
    link,
    images,
    frames,
  } = towtruck;

  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <Section indexSection={3} containerVariant="towtruck">
      <div className={styles.content}>
        <Subtitle>{subTitle.uk}</Subtitle>
        <Heading level={2} mode="intro" title={title.uk} />
        <Text mode="towtruckWelcome">{preText.uk}</Text>
        <Text mode="towtruck">{firstText.uk}</Text>
        <List list={transports} />
        <Text mode="towtruck">{secondText.uk}</Text>
        <List list={suggests} />
        <Reference src={link.src} caption={link.text.uk} />
      </div>
      <aside className={styles.aside}>
        <motion.figure
          className={styles.bigCard}
          onHoverStart={() => setShowOverlay(true)}
          onHoverEnd={() => setShowOverlay(false)}
        >
          <img
            loading="lazy"
            src={images[0].image}
            alt={images[0].alt.uk}
            className={styles.bigImage}
          />
          <AnimatePresence>
            {showOverlay && (
              <motion.figcaption
                className={styles.bigCardOverlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.5 } }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
              >
                <div className={styles.bgBlack} aria-hidden="true" />
                <motion.span
                  className={styles.bigLabel}
                  initial={{ y: 20 }}
                  animate={{ y: 0, transition: { duration: 0.5 } }}
                  exit={{ y: 20, transition: { duration: 0.5 } }}
                >
                  {`${images[0].alt.uk}`}
                </motion.span>
              </motion.figcaption>
            )}
          </AnimatePresence>
        </motion.figure>
        <GalleryList frames={frames} />
      </aside>
    </Section>
  );
};

const List = ({ list }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.8, once: true });

  const transportItem = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
    },
  };

  return (
    <ul ref={ref} className={styles.list}>
      {list.map(({ uk }, i) => {
        return (
          <motion.li
            key={i}
            className={styles.item}
            variants={transportItem}
            style={
              i % 2
                ? { originX: 1, originY: 0.5 }
                : { originX: 0, originY: 0.5 }
            }
            initial="hidden"
            animate={isInView && "visible"}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.4,
            }}
          >
            {uk}
          </motion.li>
        );
      })}
    </ul>
  );
};

const GalleryList = ({ frames }) => {
  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);

  let [ref, { width }] = useMeasure();

  const xTransition = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2;

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

    return controls?.stop;
  }, [xTransition, width, duration, rerender]);

  useEffect(() => {
    const cinema = document.querySelector("[data-cinema]");

    const onClick = (e) => {
      if (e.target.tagName !== "FIGCAPTION") return;
      console.log(e.target.dataset.id);
    };

    cinema.addEventListener("click", onClick);

    return () => cinema.removeEventListener("click", onClick);
  }, []);

  return (
    <div className={styles.wrapFrames}>
      <motion.ul
        className={styles.frames}
        ref={ref}
        data-cinema
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
        {[...frames, ...frames].map((frame, i) => (
          <li key={i} className={styles.frame}>
            <Card frame={frame} />
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

const Card = ({ frame }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.figure
      className={styles.card}
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      <img
        loading="lazy"
        src={frame.image}
        alt={frame.alt.uk}
        width={210}
        height={158}
        className={styles.image}
      />
      <AnimatePresence>
        {showOverlay && (
          <motion.figcaption
            className={styles.cardOverlay}
            data-id={frame.id}
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
              {`${frame.alt.uk}`}
            </motion.span>
          </motion.figcaption>
        )}
      </AnimatePresence>
    </motion.figure>
  );
};

export default TowTruck;
