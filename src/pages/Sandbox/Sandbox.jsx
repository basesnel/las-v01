import { motion } from "framer-motion";
import styles from "./styles.module.css";

const Sandbox = () => {
  return (
    <section className={styles.sandbox}>
      <motion.div
        className={styles.box}
        transition={{
          x: { type: "tween", duration: 1 },
          y: { type: "tween", duration: 2 },
        }}
        animate={{
          x: 200,
          y: 200,
        }}
      />
      {/* <motion.div
        className={styles.box}
        transition={{
          type: "tween",
          duration: 0.3,
          ease: "easeIn",
        }}
        animate={{
          x: 200,
        }}
      /> */}
    </section>
  );
};

export default Sandbox;
