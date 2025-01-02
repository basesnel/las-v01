import { motion, easeOut, useTime, useTransform } from "framer-motion";

import styles from "./styles.module.css";

const BannerSkeleton = () => {
  const time = useTime();
  const pulseOpacity = useTransform(time, [0, 1000, 2000, 3000], [1, 0, 1, 0], {
    ease: easeOut,
  });

  return (
    <motion.div className={styles.section} style={{ opacity: pulseOpacity }}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.innerContent} />
        </div>
        <div className={styles.aside}>
          <div className={styles.socnet}>
            <div className={styles.innerAside} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BannerSkeleton;
