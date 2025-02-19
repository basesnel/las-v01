import { useRef } from "react";
import { useInView, motion } from "framer-motion";

import styles from "./styles.module.css";

const List = ({ list }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.8, once: true });

  const transportItem = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
    },
  };

  return (
    <ul ref={ref} className={styles.list}>
      {list.map(({ uk }, i) => {
        return (
          <motion.li
            key={i}
            className={styles.item}
            variants={transportItem}
            style={
              i % 2
                ? { originX: 1, originY: 0.5 }
                : { originX: 0, originY: 0.5 }
            }
            initial="hidden"
            animate={isInView && "visible"}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.4,
            }}
          >
            {uk}
          </motion.li>
        );
      })}
    </ul>
  );
};

export default List;
