import { motion } from "framer-motion";
import icons from "../../assets/icons.svg";

import styles from "./styles.module.css";

const Togglemenu = ({
  variant,
  handleClick,
  children,
  icon,
  iconStyle,
  ...delegated
}) => {
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

  const iconVariants = {
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={40}
        height={40}
        focusable="false"
        aria-hidden={true}
        className={iconStyle}
      >
        <use href={`${icons}#${icon}`}></use>
      </svg>
    </motion.button>
  );
};

export default Togglemenu;
