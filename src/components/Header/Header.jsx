import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../Container/Container";
import Togglemenu from "../Togglemenu/Togglemenu";
import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";
import Spinner from "../Spinner/Spinner";

import useOnloadEffect from "../../hooks/useOnloadEffect";

import loadedParts from "../../helpers/loadedParts";

import styles from "./styles.module.css";

import { list, item, link } from "./variants";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isDomLoaded, setIsDomLoaded] = useState(false);

  useOnloadEffect(() => setTimeout(() => setIsDomLoaded(true), 1600));

  const openMenu = () => {
    setShowMenu(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <header className={styles.header}>
      <Container variant="header">
        <Logo />
        <nav className={styles.nav}>
          {isDomLoaded ? <LoadedParts /> : <span>nav is loading</span>}
        </nav>
        {isDomLoaded ? (
          <Togglemenu
            onClick={openMenu}
            type="button"
            aria-label="Open the mobile menu"
            icon="icon-menu"
          />
        ) : (
          <Spinner />
        )}

        <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      </Container>
    </header>
  );
};

const LoadedParts = () => {
  const parts = loadedParts();

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
