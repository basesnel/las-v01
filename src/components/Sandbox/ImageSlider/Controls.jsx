import { motion } from "framer-motion";
import IconButton from "../../IconButton/IconButton";

import styles from "./styles.module.css";

const Controls = (props) => {
  const { handleNext, handlePrev, handleSwiping } = props;

  let i = 0;

  const controlsVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 330 },
    },
  };

  return (
    <motion.ul
      variants={controlsVariants}
      initial="hidden"
      whileInView="visible"
      style={{ originX: 0.5, originY: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      className={styles.controls}
    >
      <li className={styles.control}>
        <IconButton
          icon="last"
          caption="three steps backward"
          onClick={() => handleSwiping(i, false, 3)}
          type="button"
          inverted="true"
        />
      </li>
      <li className={styles.control}>
        <IconButton
          icon="forward"
          caption="two steps backward"
          onClick={() => handleSwiping(i, false)}
          type="button"
          inverted="true"
        />
      </li>
      <li className={styles.control}>
        <IconButton
          icon="play"
          caption="backward"
          onClick={handlePrev}
          type="button"
          inverted="true"
        />
      </li>
      <li className={styles.control}>
        <IconButton
          icon="play"
          caption="forward"
          onClick={handleNext}
          type="button"
        />
      </li>
      <li className={styles.control}>
        <IconButton
          icon="forward"
          caption="two steps forward"
          onClick={() => handleSwiping(i)}
          type="button"
        />
      </li>
      <li className={styles.control}>
        <IconButton
          icon="last"
          caption="three steps forward"
          onClick={() => handleSwiping(i, true, 3)}
          type="button"
        />
      </li>
    </motion.ul>
  );
};

export default Controls;
