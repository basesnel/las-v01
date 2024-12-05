import { motion } from "framer-motion";

import styles from "./styles.module.css";

const variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "tween", duration: 0.5, delay: 0.4 },
  },
};

const Text = ({ variant, mode, children }) => {
  const variation = variant ? `${styles[variant]}` : "";
  const modification = mode ? `${styles[mode]}` : "";

  return (
    <motion.p
      className={`${styles.text} ${variation} ${modification}`}
      style={{ originX: 0.5, originY: 1 }}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10px 0px -80px 0px" }}
    >
      {children}
    </motion.p>
  );
};

export default Text;
