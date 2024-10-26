import { motion } from "framer-motion";
import Togglemenu from "../Togglemenu/Togglemenu";
import Icon from "../Icon/Icon";
import Socnets from "../Socnets/Socnets";

import styles from "./styles.module.css";

const Menu = ({ onClose, onHide }) => {
  const sections = document.querySelectorAll("section[id]");
  const parts = [];
  sections.forEach((section, i) => {
    const part = { id: i, name: section.id, label: section.ariaLabel };
    parts.push(part);
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.backdrop}
      onClick={onHide}
    >
      <motion.div
        initial={{ x: "calc(100vw)" }}
        animate={{ x: "calc(29vw)" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className={styles.menu}
        data-menu
      >
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
                  <a
                    href={`#${name}`}
                    onClick={onClose}
                    className={styles.link}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <Socnets variant="menu" />
      </motion.div>
    </motion.div>
  );
};

export default Menu;
