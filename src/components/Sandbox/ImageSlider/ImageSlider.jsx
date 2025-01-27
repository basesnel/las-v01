import { motion } from "framer-motion";
import { useState } from "react";
import gallery from "../../../constants/gallery";

import styles from "./styles.module.css";

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
  const { images } = gallery;

  // handleNext = () => {}
  // 2:36
  return <div className={styles.imageSlider}>Image slider</div>;
};

export default ImageSlider;
