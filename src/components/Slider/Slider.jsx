import SLIDES from "../../constants/slides";
import styles from "./styles.module.css";

const Slider = ({ variant }) => {
  return (
    <div className={styles.slider}>
      <div className={styles.wrapper}>
        <div className={styles.line}>
          <div className={styles.slide}>
            <img
              loading="lazy"
              src={SLIDES.mobile1}
              alt="First slide: car repair"
              width={480}
              height={580}
              className={styles.image}
            />
          </div>
          <div className={styles.slide}>
            <img
              loading="lazy"
              src={SLIDES.mobile2}
              alt="Second slide: car repair"
              width={480}
              height={580}
              className={styles.image}
            />
          </div>
          <div className={styles.slide}>
            <img
              loading="lazy"
              src={SLIDES.mobile3}
              alt="Third slide: car repair"
              width={480}
              height={580}
              className={styles.image}
            />
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
