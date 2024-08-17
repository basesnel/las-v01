import Container from "../Container/Container";
import Socnets from "../Socnets/Socnets";
import formatTimeAgo from "../../helpers/formatTimeAgo";

import styles from "./styles.module.css";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.thumb}>
          <Logo isDark={true} />
        </div>
        <Socnets />
        <p className={styles.copyright}>Copyright 2024</p>
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
