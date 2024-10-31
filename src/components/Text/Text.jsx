import { motion } from "framer-motion";

import styles from "./styles.module.css";

const Text = ({ variant, mode, children }) => {
  const variation = variant ? `${styles[variant]}` : "";
  const modification = mode ? `${styles[mode]}` : "";

  return (
    <motion.p
      className={`${styles.text} ${variation} ${modification}`}
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 3, duration: 0.5, type: "tween" }}
    >
      {children}
    </motion.p>
  );
};

export default Text;
