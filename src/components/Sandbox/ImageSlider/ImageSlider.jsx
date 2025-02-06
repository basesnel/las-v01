import { motion } from "framer-motion";
import { throttle } from "lodash";
import gallery from "../../../constants/gallery";
import useReactMatchMedia from "../../../hooks/useReactMatchMedia";
import useSwipeGallery from "../../../hooks/useSwipeGallery";
import useHandlePositions from "../../../hooks/useHandlePositions";
import Card from "./Card";
import { galleryMediaQueries } from "./getVariants";

import styles from "./styles.module.css";

const ImageSlider = () => {
  const { images } = gallery;

  const {
    positionIndexes,
    positions,
    handleNext,
    handlePrev,
    handleDrag,
    handleSwiping,
  } = useHandlePositions(images.length);

  const galleryMedia = useReactMatchMedia(galleryMediaQueries);

  useSwipeGallery(handleNext, handlePrev);

  let i = 0;

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.imageSlider}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0}
        onDrag={throttle(handleDrag, 310)}
      >
        {images.map((image, index) => (
          <Card
            image={image}
            index={index}
            media={galleryMedia}
            positionIndexes={positionIndexes}
            positions={positions}
            key={index}
          />
        ))}
      </motion.div>
      <div className={styles.controls}>
        <button
          className={styles.next}
          onClick={() => handleSwiping(i, false, 3)}
        >
          Prev | Prev | Prev
        </button>
        <button className={styles.next} onClick={() => handleSwiping(i, false)}>
          Prev | Prev
        </button>
        <button className={styles.next} onClick={handlePrev}>
          Prev
        </button>
        <button className={styles.next} onClick={handleNext}>
          Next
        </button>
        <button className={styles.next} onClick={() => handleSwiping(i)}>
          Next | Next
        </button>
        <button className={styles.next} onClick={() => handleSwiping(i)}>
          Next | Next | Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
