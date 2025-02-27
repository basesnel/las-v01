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
          <div className={styles.subtitle} />
          <div className={styles.titleFirst} />
          <div className={styles.titleSecond} />
          <div className={styles.titleThird} />
          <div className={styles.welcome} />
          <div className={styles.paragraph}>
            <div className={styles.text} />
            <div className={styles.text} />
          </div>
          <div className={styles.list}>
            <div className={styles.item} />
            <div className={styles.item} />
            <div className={styles.item} />
            <div className={styles.item} />
            <div className={styles.item} />
            <div className={styles.item} />
          </div>
          <div className={styles.paragraph}>
            <div className={styles.text} />
            <div className={styles.text} />
          </div>
          <div className={`${styles.paragraph} ${styles.last}`}>
            <div className={styles.text} />
          </div>
        </div>
        <div className={styles.aside}>
          <div className={styles.features}>
            <div className={styles.feature} />
            <div className={styles.feature} />
            <div className={styles.feature} />
            <div className={styles.feature} />
          </div>
        </div>
      </div>
    </div>
    // </motion.div>
  );
};

export default FeaturesSkeleton;
