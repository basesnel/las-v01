import formatDate from "../../helpers/formatDate";
import Container from "../Container/Container";
import Heading from "../Heading/Heading";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <header>
      <Container>
        <Heading level={1} title="lashenko auto-service" />
        <p className={styles.date}>Auto-tool | {formatDate(new Date())}</p>
      </Container>
    </header>
  );
};

export default Header;
