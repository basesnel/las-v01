import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { throttle } from "lodash";
import gallery from "../../../constants/gallery";

import styles from "./styles.module.css";

const SimpleSlider = () => {
  const carousel = useRef();

  const { images } = gallery;

  const getPositionOfContainer = () => {
    const { x, left, right } =
      carousel.current.firstChild.getBoundingClientRect();
    console.log(x, left, right);
  };

  useEffect(() => {
    console.log(carousel.current.offsetWidth, carousel.current.scrollWidth);
    console.log(carousel.current.firstChild.getBoundingClientRect());

    // for (var key in carousel.current) {
    //   console.log(key, carousel.current[key]);
    // }
  }, []);

  return (
    <motion.div className={styles.carousel} ref={carousel}>
      <motion.div
        className={styles.imagesContainer}
        drag="x"
        onDrag={throttle(getPositionOfContainer, 1000)}
        // dragConstraints={constraintRef}
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
