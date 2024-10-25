import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./styles.module.css";

const Sandbox = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <section className={styles.sandbox}>
      <motion.div
        className={styles.box}
        onClick={() => setExpanded(!expanded)}
        animate={{
          width: expanded ? "calc(100vw - 4rem)" : 150,
          opacity: 1,
          background: "#f08",
          borderRadius: 20,
        }}
      />
    </section>
  );
};

export default Sandbox;
