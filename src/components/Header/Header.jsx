import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Container from "../Container/Container";
import Togglemenu from "../Togglemenu/Togglemenu";
import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";

// import sections from "../../constants/sections";

import styles from "./styles.module.css";

function useOnloadEffect(effectCallback) {
  useEffect(() => {
    window.addEventListener("load", effectCallback);
    return () => window.removeEventListener("load", effectCallback);
  }, []);
}

const list = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

const item = {
  hidden: { scale: 0, opacity: 0, x: 31 },
  visible: { scale: 1, opacity: 1, x: 0 },
};

const link = {
  hover: {
    scale: 1.2,
    color: "#f67307",
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isDomLoaded, setIsDomLoaded] = useState(false);

  useOnloadEffect(() => setTimeout(() => setIsDomLoaded(true), 1000));

  // loadedParts = () => {
  //   const sections = document.querySelectorAll("section[id]");
  //   const parts = [];
  //   sections.forEach((section, i) => {
  //     const part = { id: i, name: section.id, label: section.ariaLabel };
  //     parts.push(part);
  //   });
  //   console.log("window loaded");
  //   return parts;
  // };

  const openMenu = () => {
    setShowMenu(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <header className={styles.header}>
      <Container variant="header">
        <Logo />
        <nav className={styles.nav}>
          {/* {sections.map(({ id, section }) => (
              <motion.li key={id} className={styles.item} variants={item}>
                <motion.a
                  href={`#${id}`}
                  className={styles.link}
                  variants={link}
                  whileHover="hover"
                >
                  {section.uk}
                </motion.a>
              </motion.li>
            ))} */}
          {isDomLoaded ? <LoadedParts /> : <span>nav is loading</span>}
        </nav>
        <Togglemenu
          onClick={openMenu}
          type="button"
          aria-label="Open the mobile menu"
          icon="icon-menu"
        />
        <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      </Container>
    </header>
  );
};

const LoadedParts = () => {
  const sections = document.querySelectorAll("section[id]");
  const parts = [];
  sections.forEach((section, i) => {
    const part = { id: i, name: section.id, label: section.ariaLabel };
    parts.push(part);
  });
  // console.log("window loaded");

  {
    /* {sections.map(({ id, section }) => (
              <motion.li key={id} className={styles.item} variants={item}>
                <motion.a
                  href={`#${id}`}
                  className={styles.link}
                  variants={link}
                  whileHover="hover"
                >
                  {section.uk}
                </motion.a>
              </motion.li>
            ))} */
  }

  return (
    <motion.ul
      className={styles.list}
      variants={list}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {parts.map(({ id, name, label }) => (
        <motion.li key={id} className={styles.item} variants={item}>
          <motion.a
            href={`#${name}`}
            className={styles.link}
            variants={link}
            whileHover="hover"
          >
            {label}
          </motion.a>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Header;
