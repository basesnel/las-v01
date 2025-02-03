import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { throttle } from "lodash";
import gallery from "../../../constants/gallery";
import useReactMatchMedia from "../../../hooks/useReactMatchMedia";
import getVariants from "./getVariants";

import styles from "./styles.module.css";

const swipeConfidenceThreshold = 65000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  ]);

  const { images } = gallery;
  const countImages = images.length;

  const myMediaQueries = {
    mobile: "(max-width: 420px)",
    smartphone: "(min-width: 421px) and (max-width: 479px)",
    tabletFirst: "(min-width: 480px) and (max-width: 590px)",
    tabletSecond: "(min-width: 591px) and (max-width: 700px)",
    tabletThird: "(min-width: 701px) and (max-width: 767px)",
    laptopFirst: "(min-width: 768px) and (max-width: 860px)",
    laptopSecond: "(min-width: 861px) and (max-width: 960px)",
    laptopThird: "(min-width: 961px) and (max-width: 1100px)",
    laptopFourth: "(min-width: 1101px) and (max-width: 1199px)",
    desktopFirst: "(min-width: 1200px) and (max-width: 1299px)",
    desktopSecond: "(min-width: 1300px) and (max-width: 1399px)",
    desktopThird: "(min-width: 1400px)",
  };

  const myMedia = useReactMatchMedia(myMediaQueries);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updateIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % countImages
      );
      return updateIndexes;
    });
  };

  const handlePrev = () => {
    setPositionIndexes((prevIndexes) => {
      const updateIndexes = prevIndexes.map((prevIndex) =>
        prevIndex === 0
          ? (prevIndex + countImages - 1) % countImages
          : (prevIndex - 1) % countImages
      );
      return updateIndexes;
    });
  };

  let i = 0;

  const swipGallery = (i) => {
    const interval = (i) => {
      if (i < 5) return 400 - 20 * i;
      if (i >= 5) return 300 - 20 * (i - 5);
    };

    setTimeout(() => {
      if (i < 5) {
        handleNext();
      } else {
        handlePrev();
      }

      i++;

      if (i < 8) {
        swipGallery(i);
      }
    }, interval(i));
  };

  useEffect(() => {
    setInterval(() => {
      swipGallery(i);
    }, 20000);
  }, []);

  const positions = [
    "center",
    "left4",
    "left3",
    "left2",
    "left1",
    "left",
    "behind",
    "right",
    "right1",
    "right2",
    "right3",
    "right4",
  ];

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.imageSlider}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0}
        onDrag={throttle((e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);

          if (swipe < -swipeConfidenceThreshold) {
            handleNext();
            console.log({
              offset: offset.x * velocity.x,
              swipeConfidenceThreshold,
            });
          } else if (swipe > swipeConfidenceThreshold) {
            handlePrev();
            console.log({
              offset: offset.x * velocity.x,
              swipeConfidenceThreshold,
            });
          }
        }, 200)}
      >
        {images.map((image, index) => (
          <motion.figure
            key={index}
            className={styles.card}
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={getVariants(myMedia)}
            transition={{ type: "spring", stiffness: 90 }}
          >
            <picture>
              <source
                srcSet={`${image.dtp1xWBP} 418w, ${image.dtp2xWBP} 836w, ${image.dtp3xWBP} 1254w, ${image.dtp4xWBP} 1672w`}
                sizes="418px"
                media="(min-width: 1200px)"
                width={418}
                height={360}
                type="image/webp"
              />

              <source
                srcSet={`${image.dtp1xJPG} 418w, ${image.dtp2xJPG} 836w, ${image.dtp3xJPG} 1254w, ${image.dtp4xJPG} 1672w`}
                sizes="418px"
                media="(min-width: 1200px)"
                width={418}
                height={360}
                type="image/jpeg"
              />

              <source
                srcSet={`${image.tab1xWBP} 330w, ${image.tab2xWBP} 660w, ${image.tab3xWBP} 990w, ${image.tab4xWBP} 1320w`}
                sizes="330px"
                media="(min-width: 768px) and (max-width: 1199px)"
                width={330}
                height={360}
                type="image/webp"
              />

              <source
                srcSet={`${image.tab1xJPG} 330w, ${image.tab2xJPG} 660w, ${image.tab3xJPG} 990w, ${image.tab4xJPG} 1320w`}
                sizes="330px"
                media="(min-width: 768px) and (max-width: 1199px)"
                width={330}
                height={360}
                type="image/jpeg"
              />

              <source
                srcSet={`${image.mob1xWBP} 270w, ${image.mob2xWBP} 540w, ${image.mob3xWBP} 810w, ${image.mob4xWBP} 1080w`}
                sizes="(max-width: 332px) calc(100vw - 62px), 270px"
                width={270}
                height={360}
                type="image/webp"
              />

              <img
                loading="lazy"
                srcSet={`${image.mob1xJPG} 270w, ${image.mob2xJPG} 540w, ${image.mob3xJPG} 810w, ${image.mob4xJPG} 1080w`}
                sizes="(max-width: 332px) calc(100vw - 62px), 270px"
                src={image.mob2xJPG}
                alt={image.alt.uk}
                width={270}
                height={360}
                className={styles.image}
              />
            </picture>
          </motion.figure>
        ))}
      </motion.div>
      <div className={styles.controls}>
        <button className={styles.next} onClick={handlePrev}>
          Prev
        </button>
        <button className={styles.next} onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
