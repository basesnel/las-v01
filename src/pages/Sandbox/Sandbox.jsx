// import Carousel from "../../components/Sandbox/CarouselBase/Carousel";
import CarouselCompound from "../../components/Sandbox/CarouselCompound/Carousel";
import EasySlider from "../../components/Sandbox/EasySlider/EasySlider";
import SimpleSlider from "../../components/Sandbox/SimpleSlider/SimpleSlider";
import ImageSlider from "../../components/Sandbox/ImageSlider/ImageSlider";
import ExampleSlider from "../../components/Sandbox/ExampleSlider/ExampleSlider";

import gallery from "../../constants/gallery";

import styles from "./styles.module.css";

const Sandbox = () => {
  const { images } = gallery;

  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.header}>6. Examplee slider</h2>
        <ExampleSlider />
      </section>
      <section className={styles.section}>
        <h2 className={styles.header}>5. image slider</h2>
        <ImageSlider images={images} />
      </section>
      <section className={styles.section}>
        <h2 className={styles.header}>4. simple image gallery slider</h2>
        <SimpleSlider />
      </section>
      <section className={styles.section}>
        <h2 className={styles.header}>3. easy image gallery slider</h2>
        <EasySlider />
      </section>
      {/* <section className={styles.section}>
        <h2 className={styles.header}>2. simple slider</h2>
        <Carousel>
          <div className={`${styles.item} ${styles.item1}`}>Item 1</div>
          <div className={`${styles.item} ${styles.item2}`}>Item 2</div>
          <div className={`${styles.item} ${styles.item3}`}>Item 3</div>
        </Carousel>
      </section> */}
      <section className={styles.container}>
        <h2 className={styles.header}>1. simple slider</h2>
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
