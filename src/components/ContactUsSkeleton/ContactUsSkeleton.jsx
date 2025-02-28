// import { motion, easeOut, useTime, useTransform } from "framer-motion";

import styles from "./styles.module.css";

const ContactUsSkeleton = () => {
  // const time = useTime();
  // const pulseOpacity = useTransform(time, [0, 1000, 2000, 3000], [1, 0, 1, 0], {
  //   ease: easeOut,
  // });

  return (
    // <motion.div className={styles.section} style={{ opacity: pulseOpacity }}>
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.innerSection}>
          <div className={styles.back} />
          <div className={styles.innerContainer}>
            <div className={styles.title} />
          </div>
        </div>
        <div className={styles.innerSection}>
          <div className={styles.back} />
          <div className={styles.innerContainer}>
            <div className={styles.title} />
          </div>
        </div>
      </div>
    </div>
    // </div></motion.div>
  );
};

export default ContactUsSkeleton;
