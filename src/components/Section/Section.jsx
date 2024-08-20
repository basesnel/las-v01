import Container from "../Container/Container";

import styles from "./styles.module.css";

const Section = ({ part, variant, mode, label, children }) => {
  const variation = variant ? `${styles[variant]}` : "";
  const modification = mode ? `${styles[mode]}` : "";

  return (
    <section
      className={`${styles.section} ${variation} ${modification}`}
      id={part}
      aria-label={label}
    >
      <Container variant={mode}>{children}</Container>
    </section>
  );
};

export default Section;
