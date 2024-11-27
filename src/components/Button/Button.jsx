import { useState } from "react";
import { motion } from "framer-motion";

import styles from "./styles.module.css";

const Button = (props) => {
  const { type, caption, onClick, isDisabled, mode, ...delegated } = props;

  const modification = mode ? `${styles[mode]}` : "";

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => setIsHover(true);

  const handleMouseLeave = () => setIsHover(false);

  const buttonVariants = {
    hidden: { y: 100, scale: 0, opacity: 0 },
    visible: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: { delay: isHover ? 0 : 1.6, type: "spring", stiffness: 300 },
    },
    hover: {
      scale: 1.2,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
    tap: {
      scale: 0.8,
    },
  };

  return (
    <motion.button
      variants={buttonVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      whileFocus="hover"
      whileTap="tap"
      viewport={{ once: true }}
      className={`${styles.button} ${modification}`}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      onMouseEnter={handleMouseEnter}
      onFocus={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onBlur={handleMouseLeave}
      {...delegated}
    >
      <span className={styles.span}>{caption}</span>
    </motion.button>
  );
};

export default Button;
