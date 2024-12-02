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

  const socList = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const socItem = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  const socLink = {
    hover: {
      scale: 1.3,
      color: "#f67307",
      x: 13,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
    tap: {
      scale: 0.8,
      x: -13,
      transition: {
        type: "spring",
        stiffness: 300,
      },
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
                  {/* <Link src={src} className={styles.link}> */}
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
                  {/* </Link> */}
                </motion.li>
              );
            })}
          </motion.ul>
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
