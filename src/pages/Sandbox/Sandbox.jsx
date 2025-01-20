// import { motion } from "framer-motion";
import Carousel from "../../components/Sandbox/CarouselBase/Carousel";
import CarouselCompound from "../../components/Sandbox/CarouselCompound/Carousel";
import styles from "./styles.module.css";

const Sandbox = () => {
  return (
    <section className={styles.sandbox}>
      <Carousel>
        <div className={`${styles.item} ${styles.item1}`}>Item 1</div>
        <div className={`${styles.item} ${styles.item2}`}>Item 2</div>
        <div className={`${styles.item} ${styles.item3}`}>Item 3</div>
      </Carousel>
      <CarouselCompound>
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
