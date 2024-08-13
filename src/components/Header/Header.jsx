import formatDate from "../../helpers/formatDate";
import Container from "../Container/Container";
import Subtitle from "../Subtitle/Subtitle";
import Heading from "../Heading/Heading";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <header>
      <Container>
        <Subtitle>a quality car service in poltava</Subtitle>
        <Heading level={1} title="liashenko auto service" />
        <p className={styles.date}>Auto-tool | {formatDate(new Date())}</p>
      </Container>
    </header>
  );
};

export default Header;
