// import { motion, easeOut, useTime, useTransform } from "framer-motion";

import styles from "./styles.module.css";

const ServicesSkeleton = () => {
  // const time = useTime();
  // const pulseOpacity = useTransform(time, [0, 1000, 2000, 3000], [1, 0, 1, 0], {
  //   ease: easeOut,
  // });

  return (
    // <motion.div className={styles.section} style={{ opacity: pulseOpacity }}>
    <div className={styles.section}>
      <div className={styles.back} />
      <div className={styles.container}>
        <div className={styles.subtitle} />
        <div className={styles.title} />
        <div className={styles.outerList}>
          <div className={styles.innerList}>
            {[...Array(6)].map((_, i) => (
              <div key={i} className={styles.item} />
            ))}
          </div>
          <div className={styles.innerList}>
            {[...Array(7)].map((_, i) => (
              <div key={i} className={styles.item} />
            ))}
          </div>
        </div>
        <div className={styles.button} />
      </div>
    </div>
    // </div></motion.div>
  );
};

export default ServicesSkeleton;
