import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import sections from "../../constants/sections";
import header from "../../constants/header";
import Container from "../Container/Container";
import Togglemenu from "../Togglemenu/Togglemenu";
import Icon from "../Icon/Icon";
import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";
// import Button from "../Button/Button";

import styles from "./styles.module.css";

const Header = () => {
  const { button } = header;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const escFunction = (event) => {
      if (event.key === "Escape") {
        isMenuOpen && closeMenu();
      }
    };

    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <Container variant="header">
        <Logo />
        <nav className={styles.nav}>
          <ul className={styles.list}>
            {sections.map(({ id, section }) => (
              <li key={id} className={styles.item}>
                <a href={`#${id}`} className={styles.link}>
                  {section.uk}
                </a>
              </li>
            ))}
          </ul>
          {/* <Button type="button" caption={button.uk} /> */}
        </nav>
        <Togglemenu onClick={openMenu} aria-label="Open the mobile menu">
          <Icon
            icon="icon-menu"
            width={28}
            height={28}
            className={styles.icon}
          />
        </Togglemenu>
        {isMenuOpen &&
          createPortal(
            <Menu
              onHide={(event) => {
                if (event.target === event.currentTarget) closeMenu();
              }}
              onClose={closeMenu}
            />,
            document.body
          )}
      </Container>
    </header>
  );
};

export default Header;
