import { useState } from "react";

import styles from "./styles.module.css";

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

      const maxOffset = -(PAGE_WIDTH * (pages.length - 1));
      console.log(newOffset);
      return Math.max(newOffset, maxOffset);
    });
  };

  return (
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
  );
};

const Page = ({ children }) => {
  return <div className={styles.pageMainContainer}>{children}</div>;
};

Carousel.Page = Page;

export default Carousel;
