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
                    srcSet={SLIDE.mobWEBP1}
                    type="image/webp"
                    width={480}
                    height={580}
                  />

                  <img
                    loading="lazy"
                    src={SLIDE.mobJPG1}
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
