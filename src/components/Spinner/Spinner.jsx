import { motion } from "framer-motion";

import icons from "../../assets/icons.svg";

import styles from "./styles.module.css";

const Spinner = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      className={styles.spinner}
      focusable="false"
      aria-hidden={true}
      animate={{ rotate: 360 }}
      transition={{ ease: "linear", duration: 2, repeat: Infinity }}
    >
      <use href={`${icons}#spinner`}></use>
    </motion.svg>
  );
};

export default Spinner;
