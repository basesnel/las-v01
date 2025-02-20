import { useState, useEffect } from "react";
import useMeasure from "react-use-measure";
import { animate, motion, useMotionValue } from "framer-motion";
import Frame from "./Frame";

import styles from "./styles.module.css";

const Filmstrip = ({ frames, getIndex }) => {
  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);

  let [ref, { width }] = useMeasure();

  const xTransition = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2;

    if (mustFinish) {
      controls = animate(xTransition, [xTransition.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTransition.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTransition, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [xTransition, width, duration, rerender]);

  useEffect(() => {
    const cinema = document.querySelector("[data-cinema]");

    const onClick = (e) => {
      getIndex(Number(e.target.closest("figure").dataset.id));

      setMustFinish(true);
      setDuration(SLOW_DURATION);
      setTimeout(() => {
        setMustFinish(true);
        setDuration(FAST_DURATION);
      }, 2000);
    };

    cinema.addEventListener("click", onClick);

    return () => cinema.removeEventListener("click", onClick);
  }, []);

  return (
    <div className={styles.wrapFrames}>
      <motion.ul
        className={styles.frames}
        ref={ref}
        data-cinema
        style={{ x: xTransition }}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {[...frames, ...frames].map((frame, i) => (
          <li key={i} className={styles.frame}>
            <Frame frame={frame} />
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Filmstrip;
