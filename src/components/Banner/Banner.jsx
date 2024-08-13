import Section from "../Section/Section";
import Subtitle from "../Subtitle/Subtitle";
import Heading from "../Heading/Heading";
import Image from "../Image/Image";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <Section variant="dark">
      <Subtitle variant="light">a top our services</Subtitle>
      <Heading level={2} variant="light" title="banner" />
      <p className={styles.date}>Some content</p>
      <Image />
    </Section>
  );
};

export default Header;
