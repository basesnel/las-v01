import { motion } from "framer-motion";

import logo from "../../constants/logo";

import styles from "./styles.module.css";

const Logo = ({ isDark, variant }) => {
  const { label, liteWBP, litePNG, darkWBP, darkPNG } = logo;

  const logoVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -13 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 8,
        mass: 1,
        stiffness: 300,
      },
    },
    hover: {
      scale: [1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1],
      rotate: [0, 0, -13, 8, -5, 3, -2, 1, 0],
      transition: {
        duration: 0.5,
        times: [0, 0.3, 0.4, 0.64, 0.8, 0.89, 0.95, 0.99, 1],
      },
    },
    tap: {
      scale: 0.8,
      transition: {
        type: "spring",
        stiffness: 300,
      },
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
