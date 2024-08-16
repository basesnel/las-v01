import Container from "../Container/Container";
import formatTimeAgo from "../../helpers/formatTimeAgo";
import socNets from "../../constants/socials";

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <ul className={styles.list}>
          {socNets.map(({ id, text, src }) => {
            return (
              <li
                key={id}
                className={
                  id === 1
                    ? `${styles.item} ${styles.itemDecor}`
                    : `${styles.item}`
                }
              >
                <a
                  href={src}
                  className={styles.link}
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                >
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
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
