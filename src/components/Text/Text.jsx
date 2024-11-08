import { motion } from "framer-motion";

import styles from "./styles.module.css";

const variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 3, duration: 0.5, type: "tween" },
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
