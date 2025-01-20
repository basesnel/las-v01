import { useState } from "react";
import Page from "./Page";
import { CarouselContext } from "./CarouselContext";

import styles from "./styles.module.css";

const PAGE_WIDTH = 450;

const Carousel = ({ children }) => {
  const [offset, setOffset] = useState(0);

  const handleLeftArrowClick = () => {
    console.log("handleLeftArrowClick");

    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH;
      console.log(newOffset);
      return Math.min(newOffset, 0);
    });
  };

  const handleRightArrowClick = () => {
    console.log("handleRightArrowClick");

    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH;

      const maxOffset = -(PAGE_WIDTH * (children.length - 1));
      console.log(newOffset);
      return Math.max(newOffset, maxOffset);
    });
  };

  return (
    <CarouselContext.Provider value={{ width: PAGE_WIDTH }}>
      <div className={styles.mainContainer}>
        <button className={styles.arrow} onClick={handleLeftArrowClick}>
          &larr;
        </button>
        <div className={styles.window}>
          <div
            className={styles.allItemsContainer}
            style={{ transform: `translateX(${offset}px)` }}
          >
            {children}
          </div>
        </div>
        <button className={styles.arrow} onClick={handleRightArrowClick}>
          &rarr;
        </button>
      </div>
    </CarouselContext.Provider>
  );
};

Carousel.Page = Page;

export default Carousel;
