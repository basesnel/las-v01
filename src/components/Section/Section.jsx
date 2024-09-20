import sections from "../../constants/sections";
import Container from "../Container/Container";

import styles from "./styles.module.css";

const Section = (props) => {
  const {
    indexSection,
    colorMode,
    sectionVariant,
    containerVariant,
    children,
  } = props;
  const { id, section } = sections[indexSection] ? sections[indexSection] : {};

  const colorModification = colorMode ? `${styles[colorMode]}` : "";
  const sectionVariation = sectionVariant ? `${styles[sectionVariant]}` : "";

  return (
    <section
      className={`${styles.section} ${colorModification} ${sectionVariation}`}
      id={id || null}
      aria-label={section?.uk}
    >
      <Container variant={containerVariant}>{children}</Container>
    </section>
  );
};

export default Section;
