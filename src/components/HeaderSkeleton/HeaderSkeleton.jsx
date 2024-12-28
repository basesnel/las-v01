// import { useState, useEffect } from "react";
// import { motion, useMotionValueEvent, useScroll } from "framer-motion";

import styles from "./styles.module.css";

const HeaderSkeleton = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container} variant="header">
        <div className={styles.logo}></div>
        <div className={styles.menu}></div>
      </div>
    </div>
  );
};

export default HeaderSkeleton;
