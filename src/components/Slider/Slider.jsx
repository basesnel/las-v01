import { useState } from "react";
import slider from "../../constants/slider";

import styles from "./styles.module.css";

const Slider = () => {
  const [index] = useState(0);

  const { slides, prev, next } = slider;

  const dots = [];

  for (let i = 0; i < slides.length; i++) {
    dots.push(
      <div
        key={i}
        className={i === index ? `${styles.dot} ${styles.active}` : styles.dot}
      ></div>
    );
  }

  return (
    <div className={styles.slider}>
      <div className={styles.wrapper}>
        <div className={styles.line}>
          {slides.map((slide, i) => {
            return (
              <div key={i} className={styles.slide}>
                <picture>
                  <source
                    srcSet={slide.deskWEBP}
                    media="(min-width: 1200px)"
                    type="image/webp"
                    width={1070}
                    height={680}
                  />

                  <source
                    srcSet={slide.deskPNG}
                    media="(min-width: 1200px)"
                    type="image/png"
                    width={1070}
                    height={680}
                  />

                  <source
                    srcSet={slide.tabWEBP}
                    media="(min-width: 768px) and (max-width: 1199px)"
                    type="image/webp"
                    width={570}
                    height={680}
                  />

                  <source
                    srcSet={slide.tabJPG}
                    media="(min-width: 768px) and (max-width: 1199px)"
                    type="image/jpeg"
                    width={570}
                    height={680}
                  />

                  <source
                    srcSet={slide.mobWEBP}
                    type="image/webp"
                    width={480}
                    height={580}
                  />

                  <img
                    loading="lazy"
                    src={slide.mobJPG}
                    alt={slide.alt.uk}
                    width={480}
                    height={580}
                    className={styles.image}
                  />
                </picture>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.buttons}>
        <button className={`${styles.button} ${styles.prev}`}>{prev.uk}</button>
        <button className={`${styles.button} ${styles.next}`}>{next.uk}</button>
      </div>
      <div className={styles.dots}>{dots}</div>
    </div>
  );
};

export default Slider;
