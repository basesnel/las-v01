import { useState, useEffect, useRef } from "react";
import Page from "./Page";
import { CarouselContext } from "./CarouselContext";

import styles from "./styles.module.css";

const Carousel = ({ children }) => {
  const [offset, setOffset] = useState(0);
  const [width, setWidth] = useState(450);

  const windowElRef = useRef();

  useEffect(() => {
    const resizeHandler = () => {
      const _width = windowElRef.current.offsetWidth;
      setWidth(_width);
      setOffset(0);
    };

    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  const handleLeftArrowClick = () => {
    console.log("handleLeftArrowClick");

    setOffset((currentOffset) => {
      const newOffset = currentOffset + width;
      console.log(newOffset);
      return Math.min(newOffset, 0);
    });
  };

  const handleRightArrowClick = () => {
    console.log("handleRightArrowClick");

    setOffset((currentOffset) => {
      const newOffset = currentOffset - width;

      const maxOffset = -(width * (children.length - 1));
      console.log(newOffset);
      return Math.max(newOffset, maxOffset);
    });
  };

  return (
    <CarouselContext.Provider value={{ width }}>
      <div className={styles.mainContainer}>
        <button className={styles.arrow} onClick={handleLeftArrowClick}>
          &larr;
        </button>
        <div className={styles.window} ref={windowElRef}>
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
