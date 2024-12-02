import { motion } from "framer-motion";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";

import formatTimeAgo from "../../helpers/formatTimeAgo";

import socNets from "../../constants/socials";

import styles from "./styles.module.css";

import { date, copyright, socList, socItem, socLink } from "./variants";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container variant="footer">
        <div className={styles.thumb}>
          <Logo isDark={true} variant="footer" />
        </div>
        <div className={styles.content}>
          <motion.ul
            className={styles.list}
            variants={socList}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {socNets.map(({ text, src }, i) => {
              return (
                <motion.li
                  key={i}
                  className={
                    i === 0 ? `${styles.item} ${styles.itemDecor}` : styles.item
                  }
                  variants={socList}
                  initial="hidden"
                  whileInView="visible"
                  transition={{
                    delay: i * 0.2,
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
                    variants={socLink}
                    whileHover="hover"
                    whileFocus="hover"
                    whileTap="tap"
                  >
                    {text}
                  </motion.a>
                </motion.li>
              );
            })}
          </motion.ul>
          <motion.p
            className={styles.copyright}
            variants={copyright}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Copyright 2024
          </motion.p>
          <motion.p
            className={styles.date}
            variants={date}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {formatTimeAgo(
              "Mon Aug 12 2024 16:50:00 GMT+0300 (Eastern European Summer Time)",
              "uk"
            )}
          </motion.p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
