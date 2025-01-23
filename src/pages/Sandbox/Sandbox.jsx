import Carousel from "../../components/Sandbox/CarouselBase/Carousel";
import CarouselCompound from "../../components/Sandbox/CarouselCompound/Carousel";
import EasySlider from "../../components/Sandbox/EasySlider/EasySlider";
import SimpleSlider from "../../components/Sandbox/SimpleSlider/SimpleSlider";

import styles from "./styles.module.css";

const Sandbox = () => {
  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.header}>simple image gallery slider</h2>
        <SimpleSlider />
      </section>
      <section className={styles.sandbox}>
        <EasySlider />
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
    </>
  );
};

export default Sandbox;
