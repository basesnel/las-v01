import { motion } from "framer-motion";
import Togglemenu from "../Togglemenu/Togglemenu";
import Icon from "../Icon/Icon";
import Socnets from "../Socnets/Socnets";

import styles from "./styles.module.css";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const menuVariants = {
  hidden: { x: "calc(100vw)" },
  visible: {
    x: "calc(29vw)",
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 300,
      when: "beforeChildren",
    },
  },
};

const listVariants = {
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

const itemVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const Menu = ({ onClose, onHide }) => {
  const sections = document.querySelectorAll("section[id]");
  const parts = [];
  sections.forEach((section, i) => {
    const part = { id: i, name: section.id, label: section.ariaLabel };
    parts.push(part);
  });

  return (
    <motion.div
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      className={styles.backdrop}
      onClick={onHide}
    >
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate="visible"
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
          <motion.ul
            className={styles.list}
            variants={listVariants}
            initial="hidden"
            animate="visible"
          >
            {parts.map(({ id, name, label }) => {
              return (
                <motion.li
                  key={id}
                  className={styles.item}
                  variants={itemVariants}
                >
                  <a
                    href={`#${name}`}
                    onClick={onClose}
                    className={styles.link}
                  >
                    {label}
                  </a>
                </motion.li>
              );
            })}
          </motion.ul>
        </nav>
        <Socnets variant="menu" />
      </motion.div>
    </motion.div>
  );
};

export default Menu;
