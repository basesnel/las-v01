import { motion } from "framer-motion";

import styles from "./styles.module.css";

const Heading = ({ level, mode, title }) => {
  const modification = mode ? `${styles[mode]}` : "";

  switch (level) {
    case 1:
      return (
        <motion.h1
          className={`${styles.heading} ${styles.heading01}`}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2, duration: 0.5, type: "tween" }}
        >
          {title}
        </motion.h1>
      );

    case 2:
      return (
        <motion.h2
          className={`${styles.heading} ${styles.heading02} ${modification}`}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5, type: "tween" }}
        >
          {title}
        </motion.h2>
      );

    case 3:
      return (
        <h3 className={`${styles.heading} ${styles.heading02}`}>{title}</h3>
      );

    default:
      return null;
  }
};

export default Heading;
