import { motion } from "framer-motion";

import styles from "./styles.module.css";

const Subtitle = ({ mode, children }) => {
  const modification = mode ? `${styles[mode]}` : "";

  return (
    <motion.p
      className={`${styles.subtitle} ${modification}`}
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
    >
      {children}
    </motion.p>
  );
};

export default Subtitle;
