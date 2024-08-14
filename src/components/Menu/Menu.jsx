import { useEffect } from "react";

import icons from "../../assets/icons.svg";

import styles from "./styles.module.css";

const Menu = ({ onClose, onHide }) => {
  // useEffect(() => {
  //   const menuToggle = () => {
  //     const menu = document.querySelector("div[data-menu]");
  //     setTimeout(() => {
  //       menu.classList.toggle(styles.isOpen);
  //       console.log(menu.classList);
  //     }, 100);
  //   };

  //   menuToggle();

  // return () => {
  //   menuToggle();
  //   setTimeout(() => {}, 250);
  // };
  // }, []);

  return (
    <div className={styles.backdrop} onClick={onHide}>
      <div className={styles.menu} data-menu>
        <button
          className={styles.closeMenu}
          onClick={onClose}
          type="button"
          aria-label="Close the mobile menu"
        >
          <svg
            className={styles.icon}
            width="40"
            height="40"
            focusable="false"
            aria-hidden="true"
          >
            <use href={`${icons}#menu-close`}></use>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Menu;
