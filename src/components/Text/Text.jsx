import { motion } from "framer-motion";

import styles from "./styles.module.css";

const variants = {
  hidden: { x: 100, scale: 0, opacity: 0 },
  visible: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: { delay: 1.2, type: "spring", stiffness: 300 },
  },
};

const Text = ({ variant, mode, children }) => {
  const variation = variant ? `${styles[variant]}` : "";
  const modification = mode ? `${styles[mode]}` : "";

  return (
    <motion.p
      className={`${styles.text} ${variation} ${modification}`}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.p>
  );
};

export default Text;
