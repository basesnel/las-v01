// import { motion, easeOut, useTime, useTransform } from "framer-motion";

import styles from "./styles.module.css";

const ServicesSkeleton = () => {
  // const time = useTime();
  // const pulseOpacity = useTransform(time, [0, 1000, 2000, 3000], [1, 0, 1, 0], {
  //   ease: easeOut,
  // });

  return (
    // <motion.div className={styles.section} style={{ opacity: pulseOpacity }}>
    <div className={styles.footer}>
      <div className={styles.back} />
      <div className={styles.container}>
        <div className={styles.thumb}>
          <div className={styles.logo} />
        </div>
        <div className={styles.line}></div>
      </div>
    </div>
    // </div></motion.div>
  );
};

export default ServicesSkeleton;
