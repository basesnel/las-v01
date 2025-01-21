import { useState, useEffect, useRef, cloneElement, Children } from "react";
import Page from "./Page";
import { CarouselContext } from "./CarouselContext";

import styles from "./styles.module.css";

const TRANSITION_DURATION = 300;

const Carousel = ({ children, infinite }) => {
  const [offset, setOffset] = useState(0);
  const [width, setWidth] = useState(450);
  const [pages, setPages] = useState([]);
  const [transitionDuration, setTransitionDuration] =
    useState(TRANSITION_DURATION);
  const [clonesCount, setClonesCount] = useState({ head: 0, tail: 0 });

  const windowElRef = useRef();

  useEffect(() => {
    if (infinite) {
      setPages([
        cloneElement(children[Children.count(children) - 1]),
        ...children,
        cloneElement(children[0]),
      ]);
      setClonesCount({ head: 1, tail: 1 });
      return;
    }

    setPages(children);
  }, [children, infinite]);

  useEffect(() => {
    if (!infinite) return;

    if (offset == 0) {
      setTimeout(() => {
        setTransitionDuration(0);
        setOffset(-(width * (pages.length - 1 - clonesCount.tail)));
      }, TRANSITION_DURATION);
      return;
    }

    if (offset == -(width * (pages.length - 1))) {
      setTimeout(() => {
        setTransitionDuration(0);
        setOffset(-(clonesCount.head * width));
      }, TRANSITION_DURATION);
      return;
    }
  }, [infinite, offset, width, pages, clonesCount]);

  useEffect(() => {
    const resizeHandler = () => {
      const windowElWidth = windowElRef.current.offsetWidth;
      setWidth(windowElWidth);
      setOffset(-clonesCount.head * width);
    };

    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [clonesCount, width]);

  useEffect(() => {
    if (transitionDuration === 0) {
      setTimeout(() => {
        setTransitionDuration(TRANSITION_DURATION);
      }, TRANSITION_DURATION);
    }
  }, [transitionDuration]);

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

      const maxOffset = -(width * (pages.length - 1));
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
            style={{
              transitionDuration: `${transitionDuration}ms`,
              transform: `translateX(${offset}px)`,
            }}
          >
            {pages}
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
