import formatTimeAgo from "../../helpers/formatTimeAgo";
import Container from "../Container/Container";

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer>
      <Container>
        <h2 className={styles.title}>Auto-assistant</h2>
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
