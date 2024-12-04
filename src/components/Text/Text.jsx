import { motion } from "framer-motion";

import styles from "./styles.module.css";

const variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "tween", duration: 1, delay: 0.3 },
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
      viewport={{ once: true, margin: "-100px 0px" }}
    >
      {children}
    </motion.p>
  );
};

export default Text;
