import { useState } from "react";
import { motion } from "framer-motion";
import icons from "../../assets/icons.svg";

import styles from "./styles.module.css";

const Togglemenu = ({ variant, handleClick, icon, ...delegated }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const toggleVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -180 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { delay: isHover ? 0 : 0.4, type: "spring", stiffness: 120 },
    },
    hover: {
      scale: 1.2,
      color: "#f67307",
      rotate: 180,
      transition: {
        type: "spring",
        stiffness: 120,
      },
    },
    tap: {
      scale: 0.8,
    },
  };

  return (
    <motion.button
      variants={toggleVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      whileFocus="hover"
      whileTap="tap"
      viewport={{ once: true }}
      className={
        variant ? `${styles.openMenu} ${styles.closeMenu}` : styles.openMenu
      }
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onFocus={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onBlur={handleMouseLeave}
      {...delegated}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={40}
        height={40}
        focusable="false"
        aria-hidden={true}
        className={
          variant ? `${styles.openIcon} ${styles.closeIcon}` : styles.openIcon
        }
      >
        <use href={`${icons}#${icon}`}></use>
      </svg>
    </motion.button>
  );
};

export default Togglemenu;
