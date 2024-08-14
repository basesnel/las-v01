import Container from "../Container/Container";
import icons from "../../assets/icons.svg";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container variant="header">
        <a href="#" className={styles.logo}>
          las-logo
        </a>
        <button
          className={styles.openMenu}
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
      </Container>
    </header>
  );
};

export default Header;
