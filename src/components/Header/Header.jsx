import formatDate from "../../helpers/formatDate";
import Section from "../Section/Section";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <header>
      <Section>
        <h1 className={styles.title}>lashenko auto-service</h1>
        <p className={styles.date}>Auto-tool | {formatDate(new Date())}</p>
      </Section>
    </header>
  );
};

export default Header;
