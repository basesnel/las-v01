import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Container from "../Container/Container";
import Togglemenu from "../Togglemenu/Togglemenu";
import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";

import sections from "../../constants/sections";

import styles from "./styles.module.css";

function useOnloadEffect(effectCallback) {
  useEffect(() => {
    window.addEventListener("load", effectCallback);
    return () => window.removeEventListener("load", effectCallback);
  }, []);
}

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  useOnloadEffect(() => {
    const parts = [];
    sections.forEach((section, i) => {
      const part = { id: i, name: section.id, label: section.ariaLabel };
      parts.push(part);
    });
    console.log("window loaded");
    console.log(parts);
  });

  const openMenu = () => {
    setShowMenu(true);
    document.body.style.overflow = "hidden";
  };

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
    hidden: { scale: 0, opacity: 0, x: -51 },
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

  return (
    <header className={styles.header}>
      <Container variant="header">
        <Logo />
        <nav className={styles.nav}>
          <motion.ul
            className={styles.list}
            variants={list}
            initial="hidden"
            animate="visible"
          >
            {sections.map(({ id, section }) => (
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
            ))}
          </motion.ul>
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

export default Header;
