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
      <div className={styles.innerSection}>
        <div className={styles.back} />
        <div className={styles.innerContainer}>
          <div className={styles.title} />
          <div className={styles.form}>
            <div className={styles.input} />
            <div className={styles.input} />
            <div className={styles.textArea} />
            <div className={styles.button} />
            <div className={styles.button} />
          </div>
        </div>
      </div>
      <div className={styles.innerSection}>
        <div className={styles.back} />
        <div className={styles.innerContainer}>
          <div className={styles.content}>
            <div className={styles.title} />
            <div className={styles.list}>
              {[...Array(4)].map((_, i) => (
                <div key={i} className={styles.item} />
              ))}
              {/* <div className={styles.item} />
              <div className={styles.item} />
              <div className={styles.item} />
              <div className={styles.item} /> */}
            </div>
          </div>
          <div className={styles.aside}>
            <div className={styles.subTitle} />
            <div className={styles.text} />
          </div>
        </div>
      </div>
    </div>
    // </div></motion.div>
  );
};

export default ContactUsSkeleton;
