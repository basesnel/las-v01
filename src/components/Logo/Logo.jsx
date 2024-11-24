import { useState } from "react";
import { motion } from "framer-motion";

import logo from "../../constants/logo";

import styles from "./styles.module.css";

const Logo = ({ isDark, variant }) => {
  const { label, liteWBP, litePNG, darkWBP, darkPNG } = logo;

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const logoVariants = {
    hidden: { scale: 0, opacity: 0, rotate: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: [10, 0],
      transition: { delay: isHover ? 0 : 0.2, type: "spring", stiffness: 300 },
    },
    hover: {
      scale: 1.05,
      rotate: [10, 0],
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
    <motion.a
      variants={logoVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      whileFocus="hover"
      whileTap="tap"
      viewport={{ once: true }}
      href="#"
      className={variant ? `${styles.logo} ${styles[variant]}` : styles.logo}
      aria-label={label.uk}
      onMouseEnter={handleMouseEnter}
      onFocus={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onBlur={handleMouseLeave}
    >
      <picture focusable="false" aria-hidden="true">
        <source srcSet={darkWBP} media="(min-width: 768px)" type="image/webp" />

        <source srcSet={darkPNG} media="(min-width: 768px)" type="image/png" />

        <source srcSet={isDark ? darkWBP : liteWBP} type="image/webp" />

        <img
          srcSet={isDark ? darkPNG : litePNG}
          src={isDark ? darkPNG : litePNG}
          alt="logo"
          width={100}
          height={100}
          className={styles.image}
        />
      </picture>
    </motion.a>
  );
};

export default Logo;
