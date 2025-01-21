import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gallery from "../../../constants/gallery";

import styles from "./styles.module.css";

const EasySlider = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const { images } = gallery;

  return (
    <motion.div
      ref={carousel}
      className={styles.carousel}
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className={styles.innerCarousel}
      >
        {images.map((image, i) => {
          return (
            <motion.div className={styles.item} key={i}>
              <img src={image.dtp2xJPG} alt={image.alt} />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default EasySlider;
