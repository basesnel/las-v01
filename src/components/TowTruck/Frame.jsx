import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./styles.module.css";

const Frame = ({ frame }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.figure
      className={styles.card}
      data-id={frame.id}
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
      onClick={() => {
        setShowOverlay(true);
        setTimeout(() => setShowOverlay(false), 2000);
      }}
      initial={{ scale: 1 }}
      whileTap={{
        scale: [0.9, 1],
        transition: {
          type: "spring",
          stiffness: 300,
        },
      }}
    >
      <img
        loading="lazy"
        src={frame.image}
        alt={frame.alt.uk}
        width={210}
        height={158}
        className={styles.image}
      />
      <AnimatePresence>
        {showOverlay && (
          <motion.figcaption
            className={styles.cardOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <div className={styles.bgBlack} aria-hidden="true" />
            <motion.span
              className={styles.label}
              initial={{ y: 20 }}
              animate={{ y: 0, transition: { duration: 0.5 } }}
              exit={{ y: 20, transition: { duration: 0.5 } }}
            >
              {`${frame.alt.uk}`}
            </motion.span>
          </motion.figcaption>
        )}
      </AnimatePresence>
    </motion.figure>
  );
};

export default Frame;
