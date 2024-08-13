import formatDate from "../../helpers/formatDate";
import Container from "../Container/Container";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <header>
      <Container>
        <h1 className={styles.title}>lashenko auto-service</h1>
        <p className={styles.date}>Auto-tool | {formatDate(new Date())}</p>
      </Container>
    </header>
  );
};

export default Header;
