import { useState } from "react";
// import { motion, useAnimation } from "framer-motion";
import { motion } from "framer-motion";

import icons from "../../assets/icons.svg";

import styles from "./styles.module.css";

const IconButton = (props) => {
  const { icon, caption, label, inverted, ...delegated } = props;

  const [isHover, setIsHover] = useState(false);

  // const control = useAnimation();

  const handleMouseEnter = () => setIsHover(true);

  const handleMouseLeave = () => setIsHover(false);

  const buttonVariants = {
    hidden: { y: 100, scale: 0, opacity: 0 },
    visible: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: { delay: isHover ? 0 : 0.5, type: "spring", stiffness: 300 },
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

  // const iconVariants = {
  //   initial: {
  //     rotate: 0,
  //     scale: 1,
  //     fill: "#fff",
  //   },
  //   hover: {
  //     rotate: 90,
  //     scale: [1.2, 1],
  //     fill: "#171717",
  //     transition: {
  //       type: "spring",
  //       stiffness: 300,
  //     },
  //   },
  // };

  return (
    <motion.button
      variants={buttonVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      whileFocus="hover"
      whileTap="tap"
      viewport={{ once: true }}
      onMouseEnter={handleMouseEnter}
      onFocus={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onBlur={handleMouseLeave}
      aria-label={label}
      className={
        label ? `${styles.button}} ${styles.iconOnly}` : `${styles.button}`
      }
      {...delegated}
    >
      <motion.svg
        // variants={iconVariants}
        // animate={control}
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        focusable="false"
        aria-hidden={true}
        style={inverted && { transform: "rotate(180deg)" }}
        className={styles.icon}
      >
        <use href={`${icons}#${icon}`}></use>
      </motion.svg>
      <span className={styles.visuallyHidden}>{caption}</span>
    </motion.button>
  );
};

export default IconButton;
