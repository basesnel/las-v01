import Container from "../Container/Container";
import formatTimeAgo from "../../helpers/formatTimeAgo";

import styles from "./styles.module.css";
import socNets from "../../constants/socials";

const Footer = () => {
  return (
    <footer>
      <Container>
        <ul>
          {socNets.map(({ id, text, src }) => {
            return (
              <li key={id}>
                <a href={src}>{text}</a>
              </li>
            );
          })}
        </ul>
        <p className={styles.copyrigh}>Copyright 2024</p>
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
