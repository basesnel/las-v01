import { motion } from "framer-motion";
import { throttle } from "lodash";
import gallery from "../../../constants/gallery";
import useReactMatchMedia from "../../../hooks/useReactMatchMedia";
import useSwipeGallery from "../../../hooks/useSwipeGallery";
import useHandlePositions from "../../../hooks/useHandlePositions";
import Card from "./Card";
import { galleryMediaQueries } from "./getVariants";
import IconButton from "../../IconButton/IconButton";

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

  const controlsVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 300 },
    },
  };

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
      <motion.ul
        variants={controlsVariants}
        initial="hidden"
        whileInView="visible"
        style={{ originX: 0.5, originY: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className={styles.controls}
      >
        <li className={styles.control}>
          <IconButton
            icon="last"
            caption="three steps backward"
            onClick={() => handleSwiping(i, false, 3)}
            type="button"
            inverted="true"
          />
        </li>
        <li className={styles.control}>
          <IconButton
            icon="forward"
            caption="two steps backward"
            onClick={() => handleSwiping(i, false)}
            type="button"
            inverted="true"
          />
        </li>
        <li className={styles.control}>
          <IconButton
            icon="play"
            caption="backward"
            onClick={handlePrev}
            type="button"
            inverted="true"
          />
        </li>
        <li className={styles.control}>
          <IconButton
            icon="play"
            caption="forward"
            onClick={handleNext}
            type="button"
          />
        </li>
        <li className={styles.control}>
          <IconButton
            icon="forward"
            caption="two steps forward"
            onClick={() => handleSwiping(i)}
            type="button"
          />
        </li>
        <li className={styles.control}>
          <IconButton
            icon="last"
            caption="three steps forward"
            onClick={() => handleSwiping(i, true, 3)}
            type="button"
          />
        </li>
      </motion.ul>
    </div>
  );
};

export default ImageSlider;
