import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import throttle from "lodash/throttle";
import gallery from "../../../constants/gallery";

import styles from "./styles.module.css";

const SimpleSlider = () => {
  const [left, setLeft] = useState(0);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const carousel = useRef();

  const { images } = gallery;

  const getConstraintsOfContainer = () => {
    const itemsContainer = carousel.current.querySelector(
      "[data-items-container]"
    );
    const { width } = itemsContainer.getBoundingClientRect();

    setLeft(width - itemsContainer.scrollWidth);
  };

  useEffect(() => {
    getConstraintsOfContainer();

    // window.addEventListener("resize", throttle(getConstraintsOfContainer, 250));
    // return () => {
    //   window.removeEventListener(
    //     "resize",
    //     throttle(getConstraintsOfContainer, 250)
    //   );
    // };

    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWindowSize(window.innerWidth);
      });
    };
  }, []);

  return (
    <motion.div className={styles.carousel} ref={carousel}>
      <motion.div
        className={styles.itemsContainer}
        data-items-container
        drag="x"
        onDrag={throttle(getConstraintsOfContainer, 1000)}
        dragConstraints={{ right: 0, left: left }}
        key={JSON.stringify(windowSize)}
      >
        {[...images, ...images].map((image, index) => {
          return (
            <div key={index} className={styles.item} data-item={index}>
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
