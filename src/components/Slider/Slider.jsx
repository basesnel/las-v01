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
                    srcSet={`${slide.tab1xWBP} 768w, ${slide.tab2xWBP} 1536w, ${slide.tab3xWBP} 2304w, ${slide.tab2xWBP} 2072w`}
                    media="(min-width: 768px) and (max-width: 1199px)"
                    width={570}
                    height={680}
                    type="image/webp"
                  />

                  <source
                    srcSet={`${slide.tab1xJPG} 768w, ${slide.tab2xJPG} 1536w, ${slide.tab3xJPG} 2304w, ${slide.tab2xJPG} 2072w`}
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
