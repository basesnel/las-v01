import { motion } from "framer-motion";

import styles from "./styles.module.css";

const Togglemenu = ({ variant, handleClick, children, ...delegated }) => {
  const variation = variant ? `${styles[variant]}` : "";

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
