import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gallery from "../../../constants/gallery";

import styles from "./styles.module.css";

const SimpleSlider = () => {
  const constraintRef = useRef();

  const { images } = gallery;

  return (
    <motion.div className={styles.carousel} ref={constraintRef}>
      <motion.div
        className={styles.imagesContainer}
        drag="x"
        dragConstraints={constraintRef}
      >
        {[...images, ...images].map((image, index) => {
          return (
            <div key={index} className={styles.item}>
              <img
                src={image.dtp2xJPG}
                alt={image.alt}
                className={styles.image}
              />
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default SimpleSlider;
