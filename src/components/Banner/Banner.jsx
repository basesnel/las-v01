import Image from "../Image/Image";
import Section from "../Section/Section";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <Section>
      <h2 className={styles.title}>banner</h2>
      <p className={styles.date}>Some content</p>
      <Image />
    </Section>
  );
};

export default Header;
