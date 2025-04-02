// import { motion, easeOut, useTime, useTransform } from "framer-motion";

import styles from "./styles.module.css";

const IntroSkeleton = () => {
  // const time = useTime();
  // const pulseOpacity = useTransform(time, [0, 1000, 2000, 3000], [1, 0, 1, 0], {
  //   ease: easeOut,
  // });

  return (
    // <motion.div className={styles.section} style={{ opacity: pulseOpacity }}>
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.subtitle} />
          <div className={styles.titles}>
            {[...Array(2)].map((_, i) => (
              <div key={i} className={styles.title} />
            ))}
          </div>
          <div className={styles.welcomes}>
            {[...Array(2)].map((_, i) => (
              <div key={i} className={styles.welcome} />
            ))}
          </div>
          <div className={styles.paragraph}>
            {[...Array(5)].map((_, i) => (
              <div key={i} className={styles.text} />
            ))}
          </div>
          <div className={styles.paragraph}>
            {[...Array(7)].map((_, i) => (
              <div key={i} className={styles.text} />
            ))}
          </div>
          <div className={styles.paragraph}>
            {[...Array(5)].map((_, i) => (
              <div key={i} className={styles.text} />
            ))}
          </div>
          <div className={styles.reference} />
        </div>
        <div className={styles.aside}>
          {[...Array(2)].map((_, i) => (
            <div key={i} className={styles.img} />
          ))}
        </div>
      </div>
    </div>
    // </motion.div>
  );
};

export default IntroSkeleton;
