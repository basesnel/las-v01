import SLIDES from "../../constants/slides";
import styles from "./styles.module.css";

const Slider = ({ variant }) => {
  return (
    <div className={styles.slider}>
      <div className={styles.wrapper}>
        <div className={styles.line}>
          <div className={styles.slide}>
            <picture>
              <source
                srcSet={SLIDES[0].mobWEBP1}
                type="image/webp"
                width={480}
                height={580}
              />

              <img
                loading="lazy"
                src={SLIDES[0].mobJPG1}
                alt={SLIDES[0].alt}
                width={480}
                height={580}
                className={styles.image}
              />
            </picture>
          </div>
          <div className={styles.slide}>
            <picture>
              <source
                srcSet={SLIDES[1].mobWEBP2}
                type="image/webp"
                width={480}
                height={580}
              />

              <img
                loading="lazy"
                src={SLIDES[1].mobJPG2}
                alt={SLIDES[1].alt}
                width={480}
                height={580}
                className={styles.image}
              />
            </picture>
          </div>
          <div className={styles.slide}>
            <picture>
              <source
                srcSet={SLIDES[2].mobWEBP3}
                type="image/webp"
                width={480}
                height={580}
              />

              <img
                loading="lazy"
                src={SLIDES[2].mobJPG3}
                alt={SLIDES[2].alt}
                width={480}
                height={580}
                className={styles.image}
              />
            </picture>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.prev}>prev</button>
        <button className={styles.next}>next</button>
      </div>
      <div className={styles.dots}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
  );
};

export default Slider;
