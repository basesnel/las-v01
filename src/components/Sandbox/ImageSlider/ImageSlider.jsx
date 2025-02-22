import { motion } from "framer-motion";
import throttle from "lodash/throttle";
import useReactMatchMedia from "../../../hooks/useReactMatchMedia";
import useSwipeGallery from "../../../hooks/useSwipeGallery";
import useHandlePositions from "../../../hooks/useHandlePositions";
import Card from "./Card";
import Controls from "./Controls";
import { galleryMediaQueries } from "./getVariants";

import styles from "./styles.module.css";

const ImageSlider = ({ images }) => {
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
      <Controls
        handleNext={handleNext}
        handlePrev={handlePrev}
        handleSwiping={handleSwiping}
      />
    </div>
  );
};

export default ImageSlider;
