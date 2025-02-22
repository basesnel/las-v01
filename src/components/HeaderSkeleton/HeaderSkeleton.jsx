// import { motion, easeOut, useTime, useTransform } from "framer-motion";

import styles from "./styles.module.css";

const HeaderSkeleton = () => {
  // const time = useTime();
  // const pulseOpacity = useTransform(time, [0, 1000, 2000, 3000], [1, 0, 1, 0], {
  //   ease: easeOut,
  // });

  return (
    // <motion.div className={styles.header} style={{ opacity: pulseOpacity }}>
    <div className={styles.header}>
      <div className={styles.container} variant="header">
        <div className={styles.logo}></div>
        <div className={styles.menu}></div>
      </div>
    </div>
  );
};

export default HeaderSkeleton;
