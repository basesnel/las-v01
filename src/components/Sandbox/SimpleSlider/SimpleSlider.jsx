import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gallery from "../../../constants/gallery";

import styles from "./styles.module.css";

const SimpleSlider = () => {
  // const [width, setWidth] = useState(0);
  const constraintRef = useRef();

  const { images } = gallery;

  // useEffect(() => {
  //   console.log(
  //     constraintRef.current.scrollWidth,
  //     constraintRef.current.offsetWidth
  //   );
  //   setWidth(
  //     constraintRef.current.scrollWidth - constraintRef.current.offsetWidth
  //   );
  // }, []);

  return (
    <motion.div
      className={styles.carousel}
      ref={constraintRef}
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        className={styles.imagesSliderContainer}
        drag="x"
        dragConstraints={constraintRef}
      >
        {images.map((image, index) => {
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
