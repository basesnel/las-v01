import { useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import slider from "../../constants/slider";

import styles from "./styles.module.css";

const { slides, prev, next } = slider;

const DRAG_BUFFER = 50;

const Slider = () => {
  const [dragging, setDragging] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

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

  const dragX = useMotionValue(0);

  return (
    <div className={styles.slider}>
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        animate={{ translateX: `-${imgIndex * 100}%` }}
        style={{ x: dragX }}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        className={styles.wrapper}
      >
        <Slides />
      </motion.div>
      <div className={styles.buttons}>
        <button className={`${styles.button} ${styles.prev}`}>{prev.uk}</button>
        <button className={`${styles.button} ${styles.next}`}>{next.uk}</button>
      </div>
      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
    </div>
  );
};

const Slides = () => {
  return (
    <>
      {slides.map((slide, i) => {
        return (
          <div key={i} className={styles.slide}>
            <picture>
              <source
                srcSet={`${slide.dtp1xWBP} 1200w, ${slide.dtp2xWBP} 2400w, ${slide.dtp3xWBP} 3600w, ${slide.dtp2xWBP} 4800w`}
                media="(min-width: 1200px)"
                width={1070}
                height={680}
                type="image/webp"
              />

              <source
                srcSet={`${slide.dtp1xJPG} 1200w, ${slide.dtp2xJPG} 2400w, ${slide.dtp3xJPG} 3600w, ${slide.dtp2xJPG} 4800w`}
                media="(min-width: 1200px)"
                width={1070}
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
          </div>
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  const dots = [];

  for (let i = 0; i < slides.length; i++) {
    dots.push(
      <button
        key={i}
        className={
          i === imgIndex ? `${styles.dot} ${styles.active}` : styles.dot
        }
      />
    );
  }

  // return <div className={styles.dots}>{dots}</div>;
  return (
    <div className={styles.dots}>
      {slides.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={
              idx === imgIndex ? `${styles.dot} ${styles.active}` : styles.dot
            }
          />
        );
      })}
    </div>
  );
};

export default Slider;
