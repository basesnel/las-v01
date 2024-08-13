import Container from "../Container/Container";

import styles from "./styles.module.css";

const Section = ({ variant, children }) => {
  const variation = variant ? `${styles[variant]}` : "";

  return (
    <section className={`${styles.section} ${variation}`}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
