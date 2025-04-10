// import { motion, easeOut, useTime, useTransform } from "framer-motion";

import styles from "./styles.module.css";

const BrandsSkeleton = () => {
  // const time = useTime();
  // const pulseOpacity = useTransform(time, [0, 1000, 2000, 3000], [1, 0, 1, 0], {
  //   ease: easeOut,
  // });

  return (
    // <motion.div className={styles.section} style={{ opacity: pulseOpacity }}>
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.subtitle} />
        <div className={styles.titles}>
          {[...Array(4)].map((_, i) => (
            <div key={i} className={styles.title} />
          ))}
        </div>
        <div className={styles.brands}>
          {[...Array(18)].map((_, i) => (
            <div key={i} className={styles.brand} />
          ))}
        </div>
      </div>
    </div>
    // </motion.div>
  );
};

export default BrandsSkeleton;
