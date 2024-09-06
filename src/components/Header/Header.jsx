import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Container from "../Container/Container";
import Togglemenu from "../Togglemenu/Togglemenu";
import Icon from "../Icon/Icon";
import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

import styles from "./styles.module.css";

const Header = () => {
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
            <li className={styles.item}>
              <a href="#introduction" className={styles.link}>
                Invitation
              </a>
            </li>
            <li className={styles.item}>
              <a href="#services" className={styles.link}>
                Services And Prices
              </a>
            </li>
            <li className={styles.item}>
              <a href="#features" className={styles.link}>
                Our benefits
              </a>
            </li>
            {/* <li className={styles.item}>
              <a href="#shop" className={styles.link}>
                Go to buy a car
              </a>
            </li> */}
          </ul>
          <Button type="button" caption="More" />
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
