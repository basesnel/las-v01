import Container from "../Container/Container";

import styles from "./styles.module.css";

const Section = ({ part, variant, label, children }) => {
  const variation = variant ? `${styles[variant]}` : "";

  return (
    <section
      className={`${styles.section} ${variation}`}
      id={part}
      aria-label={label}
    >
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
