import { motion } from "framer-motion";

import styles from "./styles.module.css";

// const variants = {
//   hidden: { x: 100, opacity: 0, scaleX: 0 },
//   visible: {
//     x: 0,
//     opacity: 1,
//     scaleX: 1,
//     transition: { delay: 0.4, type: "spring", stiffness: 300 },
//   },
// };

const variants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { type: "tween", duration: 0.5, delay: 0.1 },
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
      // viewport={{ once: true }}
    >
      {children}
    </motion.p>
  );
};

export default Subtitle;
