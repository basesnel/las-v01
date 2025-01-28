import { motion } from "framer-motion";
import { useState } from "react";
import gallery from "../../../constants/gallery";

import styles from "./styles.module.css";

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  ]);
  const { images } = gallery;

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updateIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 12
      );
      return updateIndexes;
    });
  };

  const handlePrev = () => {
    setPositionIndexes((prevIndexes) => {
      const updateIndexes = prevIndexes.map((prevIndex) =>
        prevIndex === 0 ? (prevIndex + 11) % 12 : (prevIndex - 1) % 12
      );
      return updateIndexes;
    });
  };

  // const galleryImages = [
  //   images[0].tab2xJPG,
  //   images[1].tab2xJPG,
  //   images[2].tab2xJPG,
  //   images[3].tab2xJPG,
  //   images[4].tab2xJPG,
  // ];

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

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 8 },
    left4: { x: "-50%", scale: 0.8, zIndex: 5 },
    left3: { x: "-75%", scale: 0.5, zIndex: 3 },
    left2: { x: "-90%", scale: 0.3, zIndex: 1 },
    left1: { x: "-100%", scale: 0, zIndex: 0 },
    left: { x: "-100%", scale: 0, zIndex: 0 },
    behind: { x: "0%", scale: 0, zIndex: 0 },
    right: { x: "100%", scale: 0, zIndex: 0 },
    right1: { x: "100%", scale: 0, zIndex: 0 },
    right2: { x: "90%", scale: 0.3, zIndex: 1 },
    right3: { x: "75%", scale: 0.5, zIndex: 3 },
    right4: { x: "50%", scale: 0.8, zIndex: 5 },
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageSlider}>
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image.tab2xJPG}
            alt={index}
            className={styles.image}
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            style={{ width: "40%", position: "absolute" }}
          />
        ))}
      </div>
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
