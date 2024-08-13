import Container from "../Container/Container";
import Heading from "../Heading/Heading";
import formatTimeAgo from "../../helpers/formatTimeAgo";

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Heading level={2} title="auto-assistant" />
        <p className={styles.date}>
          {`created ${formatTimeAgo(
            "Mon Aug 12 2024 16:50:00 GMT+0300 (Eastern European Summer Time)"
          )}`}
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
