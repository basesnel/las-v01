import { motion } from "framer-motion";
import { useState } from "react";
import gallery from "../../../constants/gallery";

import styles from "./styles.module.css";

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
  const { images } = gallery;

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updateIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1) % 5);
      return updateIndexes;
    });
  };

  const galleryImages = [
    images[0].tab2xJPG,
    images[1].tab2xJPG,
    images[2].tab2xJPG,
    images[3].tab2xJPG,
    images[4].tab2xJPG,
  ];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 2 },
    left: { x: "-90%", scale: 0.5, zIndex: 1 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 2 },
  };

  return (
    <div className={styles.imageSlider}>
      {galleryImages.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={index}
          className={styles.image}
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{ width: "40%", position: "absolute" }}
        />
      ))}

      <button className={styles.next} onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
