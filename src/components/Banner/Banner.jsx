import Section from "../Section/Section";
import Heading from "../Heading/Heading";
import Image from "../Image/Image";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <Section>
      <Heading level={2} title="banner" />
      <p className={styles.date}>Some content</p>
      <Image />
    </Section>
  );
};

export default Header;
