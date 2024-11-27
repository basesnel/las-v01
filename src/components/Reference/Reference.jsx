import { useState } from "react";
import { motion, useAnimation } from "framer-motion";

import icons from "../../assets/icons.svg";

import styles from "./styles.module.css";

const Reference = (props) => {
  const { caption, label, src, mode, part } = props;

  const [isHover, setIsHover] = useState(false);

  const modify = `${styles.reference} ${styles[part]} ${styles[mode]}`;

  const control = useAnimation();

  const handleMouseEnter = () => {
    control.start("hover");
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    control.start("initial");
    setIsHover(false);
  };

  const link = {
    hidden: { y: 100, scale: 0, opacity: 0 },
    visible: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: { delay: isHover ? 0 : 1.6, type: "spring", stiffness: 300 },
    },
    hover: {
      scale: 1.2,
      backgroundColor: "#f67307",
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
    tap: {
      scale: 0.8,
    },
  };

  const icon = {
    initial: {
      rotate: 0,
      scale: 1,
      backgroundColor: "#f67307",
      fill: "#fff",
    },
    hover: {
      rotate: 90,
      scale: [1.2, 1],
      backgroundColor: "#FFF",
      fill: "#f67307",
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <motion.a
      variants={link}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      whileFocus="hover"
      whileTap="tap"
      viewport={{ once: true }}
      href={src}
      aria-label={label}
      className={label ? `${modify} ${styles.iconOnly}` : modify}
      onMouseEnter={handleMouseEnter}
      onFocus={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onBlur={handleMouseLeave}
    >
      {caption}
      <motion.svg
        variants={icon}
        animate={control}
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        focusable="false"
        aria-hidden={true}
        className={styles.icon}
      >
        <use x="8" y="8" width={16} height={16} href={`${icons}#arrow`}></use>
      </motion.svg>
    </motion.a>
  );
};

export default Reference;
