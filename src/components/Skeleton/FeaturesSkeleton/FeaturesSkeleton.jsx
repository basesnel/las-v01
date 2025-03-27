// import { motion, easeOut, useTime, useTransform } from "framer-motion";

import styles from "./styles.module.css";

const FeaturesSkeleton = () => {
  // const time = useTime();
  // const pulseOpacity = useTransform(time, [0, 1000, 2000, 3000], [1, 0, 1, 0], {
  //   ease: easeOut,
  // });

  return (
    // <motion.div className={styles.section} style={{ opacity: pulseOpacity }}>
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.subTitle} />
          <div className={styles.titles}>
            {[...Array(3)].map((_, i) => (
              <div key={i} className={styles.title} />
            ))}
          </div>
          <div className={styles.welcome} />
          <div className={styles.paragraph}>
            {[...Array(2)].map((_, i) => (
              <div key={i} className={styles.text} />
            ))}
          </div>
          <div className={styles.list}>
            {[...Array(8)].map((_, i) => (
              <div key={i} className={styles.item} />
            ))}
          </div>
          <div className={styles.paragraph}>
            {[...Array(2)].map((_, i) => (
              <div key={i} className={styles.text} />
            ))}
          </div>
          <div className={styles.paragraph}>
            <div className={styles.text} />
          </div>
        </div>
        <div className={styles.features}>
          {[...Array(4)].map((_, i) => (
            <div key={i} className={styles.feature} />
          ))}
        </div>
      </div>
    </div>
    // </motion.div>
  );
};

export default FeaturesSkeleton;
