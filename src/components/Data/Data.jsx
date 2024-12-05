import { motion } from "framer-motion";

import styles from "./styles.module.css";

const Data = ({ mode, children }) => {
  const modification = mode ? `${styles[mode]}` : "";

  const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "tween", duration: 0.5, delay: 0.4 },
    },
  };

  return (
    <motion.p
      className={`${styles.data} ${modification}`}
      style={{ originX: 1, originY: 0.5 }}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 1 }}
    >
      {children}
    </motion.p>
  );
};

export default Data;
