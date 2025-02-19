import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./styles.module.css";

const Screen = ({ images, index }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.figure
      className={styles.bigCard}
      key={index}
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      <img
        loading="lazy"
        src={images[index - 1].image}
        alt={images[index - 1].alt.uk}
        className={styles.bigImage}
      />
      <AnimatePresence>
        {showOverlay && (
          <motion.figcaption
            className={styles.bigCardOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <div className={styles.bgBlack} aria-hidden="true" />
            <motion.span
              className={styles.bigLabel}
              initial={{ y: 20 }}
              animate={{ y: 0, transition: { duration: 0.5 } }}
              exit={{ y: 20, transition: { duration: 0.5 } }}
            >
              {`${images[index - 1].alt.uk}`}
            </motion.span>
          </motion.figcaption>
        )}
      </AnimatePresence>
    </motion.figure>
  );
};

export default Screen;
