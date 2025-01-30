import { motion } from "framer-motion";
import { useState } from "react";
import gallery from "../../../constants/gallery";
import useReactMatchMedia from "../../../hooks/useReactMatchMedia";

import styles from "./styles.module.css";

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  ]);
  const { images } = gallery;
  const countImages = images.length;

  const myMediaQueries = {
    mobile: "(max-width: 480px)",
    mobTab: "(min-width: 481px) and (max-width: 767px)",
    tabDesk: "(min-width: 768px) and (max-width: 1199px)",
    desktop: "(min-width: 1200px)",
  };

  const { mobile, mobTab, tabDesk, desktop } =
    useReactMatchMedia(myMediaQueries);

  console.log("mobile:", mobile);
  console.log("mobTab:", mobTab);
  console.log("tabDesk:", tabDesk);
  console.log("desktop:", desktop);

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

  // const imageVariants = {
  //   center: { x: "0%", scale: 1, zIndex: 8 },
  //   left4: { x: "-50%", scale: 0.8, zIndex: 5 },
  //   left3: { x: "-90%", scale: 0.5, zIndex: 3 },
  //   left2: { x: "-115%", scale: 0.3, zIndex: 1 },
  //   left1: { x: "-100%", scale: 0, zIndex: 0 },
  //   left: { x: "-100%", scale: 0, zIndex: 0 },
  //   behind: { x: "0%", scale: 0, zIndex: 0 },
  //   right: { x: "100%", scale: 0, zIndex: 0 },
  //   right1: { x: "100%", scale: 0, zIndex: 0 },
  //   right2: { x: "115%", scale: 0.3, zIndex: 1 },
  //   right3: { x: "90%", scale: 0.5, zIndex: 3 },
  //   right4: { x: "50%", scale: 0.8, zIndex: 5 },
  // };

  const imageVariantsMobile = {
    center: { x: "0%", scale: 1, zIndex: 8 },
    left4: { x: "-30%", scale: 0.8, zIndex: 5 },
    left3: { x: "-90%", scale: 0, zIndex: 3 },
    left2: { x: "-115%", scale: 0, zIndex: 1 },
    left1: { x: "-100%", scale: 0, zIndex: 0 },
    left: { x: "-100%", scale: 0, zIndex: 0 },
    behind: { x: "0%", scale: 0, zIndex: 0 },
    right: { x: "100%", scale: 0, zIndex: 0 },
    right1: { x: "100%", scale: 0, zIndex: 0 },
    right2: { x: "115%", scale: 0, zIndex: 1 },
    right3: { x: "90%", scale: 0, zIndex: 3 },
    right4: { x: "30%", scale: 0.8, zIndex: 5 },
  };

  const imageVariantsTablet = {
    center: { x: "0%", scale: 1, zIndex: 8 },
    left4: { x: "-50%", scale: 0.8, zIndex: 5 },
    left3: { x: "-80%", scale: 0.5, zIndex: 3 },
    left2: { x: "-115%", scale: 0, zIndex: 1 },
    left1: { x: "-100%", scale: 0, zIndex: 0 },
    left: { x: "-100%", scale: 0, zIndex: 0 },
    behind: { x: "0%", scale: 0, zIndex: 0 },
    right: { x: "100%", scale: 0, zIndex: 0 },
    right1: { x: "100%", scale: 0, zIndex: 0 },
    right2: { x: "115%", scale: 0, zIndex: 1 },
    right3: { x: "80%", scale: 0.5, zIndex: 3 },
    right4: { x: "50%", scale: 0.8, zIndex: 5 },
  };

  const imageVariantsDesktop = {
    center: { x: "0%", scale: 1, zIndex: 8 },
    left4: { x: "-50%", scale: 0.8, zIndex: 5 },
    left3: { x: "-90%", scale: 0.5, zIndex: 3 },
    left2: { x: "-115%", scale: 0.3, zIndex: 1 },
    left1: { x: "-128%", scale: 0.2, zIndex: 0 },
    left: { x: "-145%", scale: 0, zIndex: 0 },
    behind: { x: "0%", scale: 0, zIndex: 0 },
    right: { x: "145%", scale: 0, zIndex: 0 },
    right1: { x: "128%", scale: 0.2, zIndex: 0 },
    right2: { x: "115%", scale: 0.3, zIndex: 1 },
    right3: { x: "90%", scale: 0.5, zIndex: 3 },
    right4: { x: "50%", scale: 0.8, zIndex: 5 },
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageSlider}>
        {images.map((image, index) => (
          <motion.figure
            key={index}
            className={styles.card}
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={imageVariantsDesktop}
            transition={{ duration: 0.5 }}
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
                sizes="(max-width: 480px) calc(100vw - 110px), 270px"
                width={270}
                height={360}
                type="image/webp"
              />

              <img
                loading="lazy"
                srcSet={`${image.mob1xJPG} 270w, ${image.mob2xJPG} 540w, ${image.mob3xJPG} 810w, ${image.mob4xJPG} 1080w`}
                sizes="(max-width: 480px) calc(100vw - 110px), 270px"
                src={image.mob2xJPG}
                alt={image.alt.uk}
                width={270}
                height={360}
                className={styles.image}
              />
            </picture>
          </motion.figure>
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
