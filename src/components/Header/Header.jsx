import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Container from "../Container/Container";
import Menu from "../Menu/Menu";
import icons from "../../assets/icons.svg";

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
        <a href="#" className={styles.logo}>
          las-logo
        </a>
        <button
          className={styles.openMenu}
          onClick={openMenu}
          type="button"
          aria-label="Open the mobile menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.icon}
            width="28"
            height="28"
            focusable="false"
            aria-hidden="true"
          >
            <use href={`${icons}#icon-menu`}></use>
          </svg>
        </button>
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
