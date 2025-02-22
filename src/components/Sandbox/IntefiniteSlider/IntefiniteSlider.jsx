import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import throttle from "lodash/throttle";
import gallery from "../../../constants/gallery";

import styles from "./styles.module.css";

const IndefiniteSlider = () => {
  const [left, setLeft] = useState(0);
  const carousel = useRef();

  const { images } = gallery;

  const getConstraintsOfContainer = () => {
    const itemsContainer = carousel.current.querySelector(
      "[data-items-container]"
    );
    const { x, left, width, right } = itemsContainer.getBoundingClientRect();
    console.log(x, left, width, right);
    console.log(itemsContainer.scrollWidth);

    setLeft(width - itemsContainer.scrollWidth);
    // const item = carousel.current.querySelector('[data-item="0"]');
    // const { width } = item.getBoundingClientRect();
    // console.log(width);
    // console.log(2 * width * images.length);

    // return { left: 0, right: width - itemsContainer.scrollWidth };
  };

  useEffect(() => {
    console.log(carousel.current.offsetWidth, carousel.current.scrollWidth);
    console.log(carousel.current.firstChild.getBoundingClientRect());
    getConstraintsOfContainer();

    // for (var key in carousel.current) {
    //   console.log(key, carousel.current[key]);
    // }
  }, []);

  return (
    <motion.div className={styles.carousel} ref={carousel}>
      <motion.div
        className={styles.itemsContainer}
        data-items-container
        drag="x"
        onDrag={throttle(getConstraintsOfContainer, 1000)}
        dragConstraints={{ right: 0, left: left }}
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

export default IndefiniteSlider;
