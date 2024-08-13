import Container from "../Container/Container";

import styles from "./styles.module.css";

const Section = ({ children }) => {
  return (
    <section className={styles.section}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
