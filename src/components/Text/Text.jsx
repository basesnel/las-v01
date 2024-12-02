import { motion } from "framer-motion";

import styles from "./styles.module.css";

const variants = {
  hidden: { y: 50, opacity: 0, scaleY: 0 },
  visible: {
    y: 0,
    opacity: 1,
    scaleY: 1,
    transition: { type: "tween", duration: 0.5 },
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
