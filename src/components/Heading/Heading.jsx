import { motion } from "framer-motion";

import styles from "./styles.module.css";

const firstHeading = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "tween", duration: 0.5, delay: 0.2 },
  },
};

const secondHeading = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "tween", duration: 0.5, delay: 0.2 },
  },
};

const Heading = ({ level, mode, title }) => {
  const modification = mode ? `${styles[mode]}` : "";

  switch (level) {
    case 1:
      return (
        <motion.h1
          className={`${styles.heading} ${styles.heading01}`}
          style={{ originX: 0, originY: 0.5 }}
          variants={firstHeading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {title}
        </motion.h1>
      );

    case 2:
      return (
        <motion.h2
          className={`${styles.heading} ${styles.heading02} ${modification}`}
          style={{ originX: 0, originY: 0.5 }}
          variants={secondHeading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {title}
        </motion.h2>
      );

    case 3:
      return (
        <motion.h3
          className={`${styles.heading} ${styles.heading02}`}
          style={{ originX: 0, originY: 0.5 }}
          variants={secondHeading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px 0px" }}
        >
          {title}
        </motion.h3>
      );

    default:
      return null;
  }
};

export default Heading;
