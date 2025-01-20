// import { motion } from "framer-motion";

import styles from "./styles.module.css";

const PAGE_WIDTH = 450;

const Sandbox = () => {
  return (
    <section className={styles.sandbox}>
      <Carousel>
        <div className={`${styles.item} ${styles.item1}`}>Item 1</div>
        <div className={`${styles.item} ${styles.item2}`}>Item 2</div>
        <div className={`${styles.item} ${styles.item3}`}>Item 3</div>
      </Carousel>
    </section>
  );
};

export default Sandbox;
