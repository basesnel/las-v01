import { motion } from "framer-motion";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";

import footer from "../../constants/footer";
import socNets from "../../constants/socials";

import formatTimeAgo from "../../helpers/formatTimeAgo";

import styles from "./styles.module.css";

import { date, copyright, socItem, socLink } from "./variants";

const Footer = () => {
  const { copyrightData, days } = footer;

  return (
    <footer className={styles.footer}>
      <Container variant="footer">
        <div className={styles.thumb}>
          <Logo isDark={true} variant="footer" />
        </div>
        <div className={styles.content}>
          <SocnetList />
          <Copyright copyrightData={copyrightData} />
          <Date lan={days.uk} />
        </div>
      </Container>
    </footer>
  );
};

const SocnetList = () => {
  return (
    <ul className={styles.list}>
      {socNets.map(({ text, src }, i) => {
        return (
          <motion.li
            key={i}
            className={
              i === 0 ? `${styles.item} ${styles.itemDecor}` : styles.item
            }
            style={{ originX: 0.5, originY: 1 }}
            variants={socItem}
            initial="hidden"
            whileInView="visible"
            transition={{
              delay: 0.5 + i * 0.2,
              type: "spring",
              stiffness: 300,
            }}
            viewport={{ once: true }}
          >
            <motion.a
              href={src}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={styles.link}
              style={{ originX: 0, originY: 0.5 }}
              variants={socLink}
              initial="initial"
              whileHover="hover"
              whileFocus="hover"
              whileTap="tap"
            >
              {text}
            </motion.a>
          </motion.li>
        );
      })}
    </ul>
  );
};

const Date = ({ lan }) => {
  return (
    <motion.p
      className={styles.date}
      style={{ originX: 1, originY: 0.5 }}
      variants={date}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 1 }}
    >
      {formatTimeAgo(
        "Tue Dec 16 2024 19:05:00 GMT+0300 (Eastern European Summer Time)",
        lan
      )}
    </motion.p>
  );
};

const Copyright = ({ copyrightData }) => {
  return (
    <p className={styles.copyright} lang="en">
      <motion.span
        className={styles.copyrightSpan}
        style={{ originX: 0.5, originY: 1 }}
        variants={copyright}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
      >
        {copyrightData.uk}
      </motion.span>
    </p>
  );
};

export default Footer;
