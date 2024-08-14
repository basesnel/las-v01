// import { useEffect } from "react";
import Togglemenu from "../Togglemenu/Togglemenu";
import Icon from "../Icon/Icon";

// import icons from "../../assets/icons.svg";

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
        <Togglemenu
          variant="closeMenu"
          onClick={onClose}
          type="button"
          aria-label="Close the mobile menu"
        >
          <Icon
            icon="menu-close"
            width={40}
            height={40}
            className={styles.icon}
          />
        </Togglemenu>
      </div>
    </div>
  );
};

export default Menu;
