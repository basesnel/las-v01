import { motion } from "framer-motion";

import styles from "./styles.module.css";

const variants = {
  hidden: { x: 100, opacity: 0, scaleX: 0 },
  visible: {
    x: 0,
    opacity: 1,
    scaleX: 1,
    transition: { delay: 0.3, type: "spring", stiffness: 300 },
  },
};

const Subtitle = ({ mode, children }) => {
  const modification = mode ? `${styles[mode]}` : "";

  return (
    <motion.p
      className={`${styles.subtitle} ${modification}`}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.p>
  );
};

export default Subtitle;
