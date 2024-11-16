import { motion, useAnimation } from "framer-motion";

import icons from "../../assets/icons.svg";

import styles from "./styles.module.css";

const link = {
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

const Reference = (props) => {
  const { caption, src } = props;
  // const modification = mode ? `${styles[mode]}` : "";
  const control = useAnimation();
  const handleMouseEnter = () => {
    control.start("hover");
  };
  const handleMouseLeave = () => {
    control.start("initial");
  };

  return (
    <motion.a
      variants={link}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      href={src}
      className={styles.reference}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
