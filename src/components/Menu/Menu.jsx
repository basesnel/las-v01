// import { useEffect } from "react";
import Togglemenu from "../Togglemenu/Togglemenu";
import Icon from "../Icon/Icon";
import Socnets from "../Socnets/Socnets";

import styles from "./styles.module.css";

const Menu = ({ onClose, onHide }) => {
  const sections = document.querySelectorAll("section");
  const parts = [];
  sections.forEach((section, i) => {
    const part = { id: i, name: section.id, label: section.ariaLabel };
    parts.push(part);
  });
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
        <nav>
          <ul className={styles.list}>
            {parts.map(({ id, name, label }) => {
              return (
                <li key={id} className={styles.item}>
                  <a href={`#${name}`} className={styles.link}>
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <Socnets variant="menu" />
      </div>
    </div>
  );
};

export default Menu;
