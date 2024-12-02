import { motion } from "framer-motion";

import Container from "../Container/Container";
// import Socnets from "../Socnets/Socnets";
import Logo from "../Logo/Logo";

import formatTimeAgo from "../../helpers/formatTimeAgo";

import socNets from "../../constants/socials";

import styles from "./styles.module.css";

const Footer = () => {
  const dateVariants = {
    hidden: { x: -100, opacity: 0, scaleX: 0 },
    visible: {
      x: 0,
      opacity: 1,
      scaleX: 1,
      transition: { type: "tween", duration: 0.5 },
    },
  };

  const copirightVariants = {
    hidden: { y: 20, opacity: 0, scaleY: 0 },
    visible: {
      y: 0,
      opacity: 1,
      scaleY: 1,
      transition: { type: "tween", duration: 0.5 },
    },
  };

  return (
    <footer className={styles.footer}>
      <Container variant="footer">
        <div className={styles.thumb}>
          <Logo isDark={true} variant="footer" />
        </div>
        <div className={styles.content}>
          {/* <Socnets /> */}
          <ul className={`${styles.list}`}>
            {socNets.map(({ text, src }, i) => {
              return (
                <li
                  key={i}
                  className={
                    i === 0 ? `${styles.item} ${styles.itemDecor}` : styles.item
                  }
                >
                  {/* <Link src={src} className={styles.link}> */}
                  <a
                    href={src}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className={styles.link}
                  >
                    {text}
                  </a>
                  {/* </Link> */}
                </li>
              );
            })}
          </ul>
          <motion.p
            className={styles.copyright}
            variants={copirightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Copyright 2024
          </motion.p>
          <motion.p
            className={styles.date}
            variants={dateVariants}
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
