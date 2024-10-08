import Container from "../Container/Container";
import Socnets from "../Socnets/Socnets";
import Logo from "../Logo/Logo";
import formatTimeAgo from "../../helpers/formatTimeAgo";

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container variant="footer">
        <div className={styles.thumb}>
          <Logo isDark={true} variant="footer" />
        </div>
        <div className={styles.content}>
          <Socnets />
          <p className={styles.copyright}>Copyright 2024</p>
          <p className={styles.date}>
            {formatTimeAgo(
              "Mon Aug 12 2024 16:50:00 GMT+0300 (Eastern European Summer Time)",
              "uk"
            )}
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
