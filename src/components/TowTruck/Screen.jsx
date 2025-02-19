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
      <motion.div
        className={styles.oldFilm}
        aria-hidden="true"
        // initial={{ opacity: 1 }}
        // animate={{ opacity: [1, 1, 0], transition: { times: [0, 2, 3] } }}
        animate={{
          opacity: [1, 0.8, 0],
          transition: { duration: 1.5, times: [0, 0.5, 1] },
        }}
      >
        {images[index - 1].alt.uk}
        <div className={styles.film}>
          <div className={styles.effect}>
            <div className={styles.grain} />
          </div>
        </div>
      </motion.div>
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
