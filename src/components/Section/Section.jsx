import sections from "../../constants/sections";
import Container from "../Container/Container";

import styles from "./styles.module.css";

const Section = ({ indexSection, variant, mode, children }) => {
  const { id, section } = sections[indexSection];
  // console.log(id, indexSection);

  const variation = variant ? `${styles[variant]}` : "";
  const modification = mode ? `${styles[mode]}` : "";

  return (
    <section
      className={`${styles.section} ${variation} ${modification}`}
      id={id}
      aria-label={section.uk}
    >
      <Container variant={mode}>{children}</Container>
    </section>
  );
};

export default Section;
