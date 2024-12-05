import { motion } from "framer-motion";

import styles from "./styles.module.css";

const variants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { type: "tween", duration: 0.5, delay: 0.2 },
  },
};

const Subtitle = ({ mode, children }) => {
  const modification = mode ? `${styles[mode]}` : "";

  return (
    <motion.p
      className={`${styles.subtitle} ${modification}`}
      style={{ originX: 1, originY: 0.5 }}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 1, margin: "-60px 0px -180px 0px" }}
    >
      {children}
    </motion.p>
  );
};

export default Subtitle;
