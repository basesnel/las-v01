// import { motion, easeOut, useTime, useTransform } from "framer-motion";

import styles from "./styles.module.css";

const GalletySkeleton = () => {
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
      </div>
      <div className={styles.list}>
        {[...Array(7)].map((_, i) => (
          <div key={i} className={styles.item} />
        ))}
      </div>
      <div className={styles.controls}>
        {[...Array(6)].map((_, i) => (
          <div key={i} className={styles.button} />
        ))}
      </div>
    </div>
    // </div></motion.div>
  );
};

export default GalletySkeleton;
