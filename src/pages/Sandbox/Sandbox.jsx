import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Carousel from "../../components/Sandbox/CarouselBase/Carousel";
import CarouselCompound from "../../components/Sandbox/CarouselCompound/Carousel";
import gallery from "../../constants/gallery";

import styles from "./styles.module.css";

const Sandbox = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const { images } = gallery;

  return (
    <section className={styles.sandbox}>
      <motion.div
        ref={carousel}
        className={styles.carousel}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className={styles.innerCarousel}
        >
          {images.map((image, i) => {
            return (
              <motion.div className={styles.item} key={i}>
                <img src={image.dtp1xJPG} alt={image.alt} />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
      <Carousel>
        <div className={`${styles.item} ${styles.item1}`}>Item 1</div>
        <div className={`${styles.item} ${styles.item2}`}>Item 2</div>
        <div className={`${styles.item} ${styles.item3}`}>Item 3</div>
      </Carousel>
      <CarouselCompound infinite>
        <CarouselCompound.Page>
          <div className={`${styles.item} ${styles.item1}`}>Item 1</div>
        </CarouselCompound.Page>
        <CarouselCompound.Page>
          <div className={`${styles.item} ${styles.item2}`}>Item 2</div>
        </CarouselCompound.Page>
        <CarouselCompound.Page>
          <div className={`${styles.item} ${styles.item3}`}>Item 3</div>
        </CarouselCompound.Page>
      </CarouselCompound>
    </section>
  );
};

export default Sandbox;
