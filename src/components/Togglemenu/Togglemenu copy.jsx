import { motion } from "framer-motion";

import styles from "./styles.module.css";

const Togglemenu = ({ variant, handleClick, children, ...delegated }) => {
  const variation = variant ? `${styles[variant]}` : "";

  const toggleVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -180 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 300 },
    },
    hover: {
      scale: 1.2,
      backgroundColor: "#f67307",
      rotate: 180,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
    tap: {
      scale: 0.8,
      rotate: 0,
    },
  };

  const icon = {
    hover: {
      fill: "#f67307",
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <motion.button
      className={`${styles.openMenu} ${variation}`}
      onClick={handleClick}
      type="button"
      whileHover={{
        scale: 1.1,
        color: "#f67307",
      }}
      {...delegated}
    >
      {children}
    </motion.button>
  );
};

export default Togglemenu;
