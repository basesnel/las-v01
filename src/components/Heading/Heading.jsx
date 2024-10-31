import { motion } from "framer-motion";

import styles from "./styles.module.css";

const firstHeading = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { delay: 2, duration: 0.5, type: "tween" },
  },
};

const secondHeading = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 1.5, type: "spring", stiffness: 120 },
  },
};

const Heading = ({ level, mode, title }) => {
  const modification = mode ? `${styles[mode]}` : "";

  switch (level) {
    case 1:
      return (
        <motion.h1
          className={`${styles.heading} ${styles.heading01}`}
          variants={firstHeading}
          initial="hidden"
          whileInView="visible"
        >
          {title}
        </motion.h1>
      );

    case 2:
      return (
        <motion.h2
          className={`${styles.heading} ${styles.heading02} ${modification}`}
          variants={secondHeading}
          initial="hidden"
          whileInView="visible"
        >
          {title}
        </motion.h2>
      );

    case 3:
      return (
        <motion.h3
          className={`${styles.heading} ${styles.heading02}`}
          variants={secondHeading}
          initial="hidden"
          whileInView="visible"
        >
          {title}
        </motion.h3>
      );

    default:
      return null;
  }
};

export default Heading;
