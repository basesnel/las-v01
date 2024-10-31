import { motion } from "framer-motion";

import styles from "./styles.module.css";

const subtitleVariants = {
  hidden: { x: 100, opacity: 0, scaleX: 0 },
  visible: {
    x: 0,
    opacity: 1,
    scaleX: 1,
    transition: { delay: 0.5, type: "spring", stiffness: 120 },
  },
};

const Subtitle = ({ mode, children }) => {
  const modification = mode ? `${styles[mode]}` : "";

  return (
    <motion.p
      className={`${styles.subtitle} ${modification}`}
      variants={subtitleVariants}
      initial="hidden"
      whileInView="visible"
    >
      {children}
    </motion.p>
  );
};

export default Subtitle;
