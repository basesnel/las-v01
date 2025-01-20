// import { motion } from "framer-motion";
import { useState, useEffect, Children, cloneElement } from "react";
import styles from "./styles.module.css";

const PAGE_WIDTH = 450;

const Sandbox = () => {
  return (
    <section className={styles.sandbox}>
      <Carousel>
        <div className={`${styles.item} ${styles.item1}`}>Item 1</div>
        <div className={`${styles.item} ${styles.item2}`}>Item 2</div>
        <div className={`${styles.item} ${styles.item3}`}>Item 3</div>
      </Carousel>
    </section>
  );
};

const Carousel = ({ children }) => {
  const [pages, setPages] = useState([]);
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

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
          },
        });
      })
    );
    console.log(pages);
  }, []);

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
          {pages}
        </div>
      </div>
      <button className={styles.arrow} onClick={handleRightArrowClick}>
        &rarr;
      </button>
    </div>
  );
};

export default Sandbox;
