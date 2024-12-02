import { motion } from "framer-motion";

import styles from "./styles.module.css";

// const firstHeading = {
//   hidden: { x: 100, scale: 0, opacity: 0 },
//   visible: {
//     x: 0,
//     scale: 1,
//     opacity: 1,
//     transition: { delay: 0.8, type: "spring", stiffness: 300 },
//   },
// };

const firstHeading = {
  hidden: { x: 100, scale: 0, opacity: 0 },
  visible: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: { type: "tween", duration: 0.5 },
  },
};

// const secondHeading = {
//   hidden: { y: 100, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: { delay: 0.8, type: "spring", stiffness: 300 },
//   },
// };

const secondHeading = {
  hidden: { x: 100, scale: 0, opacity: 0 },
  visible: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: { type: "tween", duration: 0.5 },
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
          // viewport={{ once: true }}
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
          viewport={{ once: true }}
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
          viewport={{ once: true }}
        >
          {title}
        </motion.h3>
      );

    default:
      return null;
  }
};

export default Heading;
