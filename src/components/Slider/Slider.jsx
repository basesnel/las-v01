import { useState } from "react";
import SLIDES from "../../constants/slides";
import styles from "./styles.module.css";

const Slider = () => {
  const [index] = useState(0);

  const dots = [];

  for (let i = 0; i < SLIDES.length; i++) {
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
          {SLIDES.map((SLIDE, i) => {
            return (
              <div key={i} className={styles.slide}>
                <picture>
                  <source
                    srcSet={SLIDE.tabWEBP}
                    media="(min-width: 768px) and (max-width: 1199px)"
                    type="image/webp"
                    width={570}
                    height={680}
                  />

                  <source
                    srcSet={SLIDE.tabJPG}
                    media="(min-width: 768px) and (max-width: 1199px)"
                    type="image/jpeg"
                    width={570}
                    height={680}
                  />
                  <source
                    srcSet={SLIDE.mobWEBP}
                    type="image/webp"
                    width={480}
                    height={580}
                  />

                  <img
                    loading="lazy"
                    src={SLIDE.mobJPG}
                    alt={SLIDE.alt}
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
        <button className={styles.prev}>prev</button>
        <button className={styles.next}>next</button>
      </div>
      <div className={styles.dots}>{dots}</div>
    </div>
  );
};

export default Slider;
