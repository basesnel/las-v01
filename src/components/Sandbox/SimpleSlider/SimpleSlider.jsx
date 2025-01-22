import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gallery from "../../../constants/gallery";

import styles from "./styles.module.css";

const SimpleSlider = () => {
  const constrainRef = useRef(null);

  const { images } = gallery;

  return (
    <motion.div className={styles.carousel} ref={constrainRef}>
      <motion.div
        className={styles.imagesContainer}
        drag="x"
        dragConstraints={constrainRef}
      >
        {images.map((image, index) => {
          return (
            <img
              key={index}
              src={image.dtp2xJPG}
              alt={image.alt}
              className={styles.image}
            />
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default SimpleSlider;
