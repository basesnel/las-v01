import { useState, useEffect } from "react";
import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";

import slider from "../../constants/slider";

import {
  buttons,
  buttonPrev,
  buttonNext,
  buttonDots,
  buttonDot,
} from "./variants";

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
            animate={{
              opacity: imgIndex === i ? 0.8 : 1,
              scale: imgIndex === i ? 1 : 0.5,
            }}
            transition={SPRING_OPTIONS}
            className={styles.slide}
          >
            <picture>
              <source
                srcSet={`${slide.dtp1xWBP} 1200w, ${slide.dtp2xWBP} 2400w, ${slide.dtp3xWBP} 3600w, ${slide.dtp2xWBP} 4800w`}
                sizes="1040px"
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
                srcSet={`${slide.tab1xWBP} 570w, ${slide.tab2xWBP} 1140w, ${slide.tab3xWBP} 1710w, ${slide.tab4xWBP} 2280w`}
                sizes="570px"
                media="(min-width: 768px) and (max-width: 1199px)"
                width={570}
                height={680}
                type="image/webp"
              />

              <source
                srcSet={`${slide.tab1xJPG} 570w, ${slide.tab2xJPG} 1140w, ${slide.tab3xJPG} 1710w, ${slide.tab4xJPG} 2280w`}
                sizes="570px"
                media="(min-width: 768px) and (max-width: 1199px)"
                width={570}
                height={680}
                type="image/jpeg"
              />

              <source
                srcSet={`${slide.mob1xWBP} 480w, ${slide.mob2xWBP} 960w, ${slide.mob3xWBP} 1440w, ${slide.mob4xWBP} 1920w`}
                sizes="(max-width: 480px) 100vw, 480px"
                width={480}
                height={580}
                type="image/webp"
              />

              <img
                loading="lazy"
                srcSet={`${slide.mob1xJPG} 480w, ${slide.mob2xJPG} 960w, ${slide.mob3xJPG} 1440w, ${slide.mob4xJPG} 1920w`}
                sizes="(max-width: 480px) 100vw, 480px"
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
      <motion.div
        className={styles.buttons}
        style={{ originX: 1, originY: 1 }}
        variants={buttons}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.button
          className={`${styles.button} ${styles.prev}`}
          style={{ originX: 1, originY: 1 }}
          variants={buttonPrev}
          whileHover="hover"
          whileFocus="hover"
          whileTap="tap"
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
          className={`${styles.button} ${styles.next}`}
          style={{ originX: 0, originY: 1 }}
          variants={buttonNext}
          whileHover="hover"
          whileFocus="hover"
          whileTap="tap"
          onClick={() =>
            setImgIndex((i) => {
              if (i === slides.length - 1) return 0;
              return i + 1;
            })
          }
        >
          {next.uk}
        </motion.button>
      </motion.div>
      <motion.div
        variants={buttonDots}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={styles.dots}
      >
        {slides.map((_, idx) => {
          return (
            <motion.button
              key={idx}
              className={
                idx === imgIndex ? `${styles.dot} ${styles.active}` : styles.dot
              }
              style={{ originX: 1, originY: 0.5 }}
              variants={buttonDot}
              whileHover="hover"
              whileFocus="hover"
              whileTap="tap"
              onClick={() => setImgIndex(idx)}
            />
          );
        })}
      </motion.div>
    </>
  );
};

export default Slider;
