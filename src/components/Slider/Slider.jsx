import { useState, useEffect } from "react";
import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import slider from "../../constants/slider";

import styles from "./styles.module.css";

const { slides, prev, next } = slider;

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 20;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const buttonPrev = {
  hover: {
    scale: 1.2,
    x: -5,
    y: -2,
    color: "#f0f0f0",
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
  tap: {
    scale: 0.9,
  },
};

const buttonNext = {
  hover: {
    scale: 1.2,
    x: 5,
    y: -2,
    color: "#f0f0f0",
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
  tap: {
    scale: 0.9,
  },
};

const buttonDots = {
  hover: {
    scale: 1.2,
    x: -2,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

const buttonDot = {
  hover: {
    scale: 1.4,
    x: -4,
    color: "#f0f0f0",
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
  tap: {
    scale: 0.9,
  },
};

const Slider = () => {
  const [dragging, setDragging] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);
  const dragXProgress = useMotionValue(0);

  useMotionValueEvent(dragX, "change", (latest) => {
    if (typeof latest === "number" && dragging) {
      dragXProgress.set(latest);
    } else {
      dragXProgress.set(0);
    }
  });

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragXProgress.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === slides.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragStart = () => {
    setDragging(true);
  };

  const onDragEnd = () => {
    setDragging(false);

    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < slides.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className={styles.slider}>
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        animate={{ translateX: `-${imgIndex * 100}%` }}
        transition={SPRING_OPTIONS}
        style={{ x: dragX }}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        className={styles.wrapper}
      >
        <Slides imgIndex={imgIndex} />
      </motion.div>
      <GradientEdges />
      <Controls imgIndex={imgIndex} setImgIndex={setImgIndex} />
    </div>
  );
};

const Slides = ({ imgIndex }) => {
  return (
    <>
      {slides.map((slide, i) => {
        return (
          <motion.div
            key={i}
            animate={{ scale: imgIndex === i ? 1 : 0.5 }}
            transition={SPRING_OPTIONS}
            className={styles.slide}
          >
            <picture>
              <source
                srcSet={`${slide.dtp1xWBP} 1200w, ${slide.dtp2xWBP} 2400w, ${slide.dtp3xWBP} 3600w, ${slide.dtp2xWBP} 4800w`}
                media="(min-width: 1200px)"
                width={1040}
                height={680}
                type="image/webp"
              />

              <source
                srcSet={`${slide.dtp1xJPG} 1200w, ${slide.dtp2xJPG} 2400w, ${slide.dtp3xJPG} 3600w, ${slide.dtp2xJPG} 4800w`}
                media="(min-width: 1200px)"
                width={1040}
                height={680}
                type="image/jpg"
              />

              <source
                srcSet={`${slide.tab1xWBP} 768w, ${slide.tab2xWBP} 1536w, ${slide.tab3xWBP} 2304w, ${slide.tab2xWBP} 3072w`}
                media="(min-width: 768px) and (max-width: 1199px)"
                width={570}
                height={680}
                type="image/webp"
              />

              <source
                srcSet={`${slide.tab1xJPG} 768w, ${slide.tab2xJPG} 1536w, ${slide.tab3xJPG} 2304w, ${slide.tab2xJPG} 3072w`}
                media="(min-width: 768px) and (max-width: 1199px)"
                width={570}
                height={680}
                type="image/jpeg"
              />

              <source
                srcSet={`${slide.mob1xWBP} 480w, ${slide.mob2xWBP} 960w, ${slide.mob3xWBP} 1440w, ${slide.mob2xWBP} 1920w`}
                width={480}
                height={580}
                type="image/webp"
              />

              <img
                loading="lazy"
                srcSet={`${slide.mob1xJPG} 480w, ${slide.mob2xJPG} 960w, ${slide.mob3xJPG} 1440w, ${slide.mob2xJPG} 1920w`}
                src={slide.mob2xJPG}
                alt={slide.alt.uk}
                width={480}
                height={580}
                className={styles.image}
              />
            </picture>
          </motion.div>
        );
      })}
    </>
  );
};

const Controls = ({ imgIndex, setImgIndex }) => {
  return (
    <>
      <div className={styles.buttons}>
        <motion.button
          variants={buttonPrev}
          whileHover="hover"
          whileFocus="hover"
          whileTap="tap"
          className={`${styles.button} ${styles.prev}`}
          onClick={() =>
            setImgIndex((i) => {
              if (i === 0) return slides.length - 1;
              return i - 1;
            })
          }
        >
          {prev.uk}
        </motion.button>
        <motion.button
          variants={buttonNext}
          whileHover="hover"
          whileFocus="hover"
          whileTap="tap"
          className={`${styles.button} ${styles.next}`}
          onClick={() =>
            setImgIndex((i) => {
              if (i === slides.length - 1) return 0;
              return i + 1;
            })
          }
        >
          {next.uk}
        </motion.button>
      </div>
      <motion.div
        variants={buttonDots}
        whileHover="hover"
        className={styles.dots}
      >
        {slides.map((_, idx) => {
          return (
            <motion.button
              variants={buttonDot}
              whileHover="hover"
              whileFocus="hover"
              whileTap="tap"
              key={idx}
              onClick={() => setImgIndex(idx)}
              className={
                idx === imgIndex ? `${styles.dot} ${styles.active}` : styles.dot
              }
            />
          );
        })}
      </motion.div>
    </>
  );
};

const GradientEdges = () => {
  return <div className={styles.gradientEdges} />;
};

export default Slider;
