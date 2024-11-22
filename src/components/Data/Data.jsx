import { motion } from "framer-motion";

import styles from "./styles.module.css";

const Data = ({ mode, children }) => {
  const modification = mode ? `${styles[mode]}` : "";

  const variants = {
    hidden: { x: -400, opacity: 0, scaleX: 0 },
    visible: {
      x: 0,
      opacity: 1,
      scaleX: 1,
      transition: { delay: 2.4, type: "spring", stiffness: 300 },
    },
  };

  return (
    <motion.p
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`${styles.data} ${modification}`}
    >
      {children}
    </motion.p>
  );
};

export default Data;
