import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Togglemenu from "../Togglemenu/Togglemenu";
import Icon from "../Icon/Icon";
import socNets from "../../constants/socials";

import styles from "./styles.module.css";

const backdrop = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // delay: 0.5,
      // type: "spring",
      // damping: 30,
      // stiffness: 300,
      when: "beforeChildren",
    },
  },
};

const menu = {
  hidden: { x: "100vw", opacity: 0 },
  visible: {
    x: "29vw",
    opacity: 1,
    transition: {
      //   delay: 0.5,
      // type: "spring",
      // damping: 30,
      // stiffness: 300,
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

const socnetListVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      delay: 1.2,
      when: "beforeChildren",
      staggerChildren: 1,
    },
  },
};

const socnetItemVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
};

const linkVariants = {
  hover: {
    scale: 1.1,
    color: "#f67307",
    x: 20,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

const Menu = ({ showMenu, setShowMenu }) => {
  const sections = document.querySelectorAll("section[id]");

  const parts = [];
  sections.forEach((section, i) => {
    const part = { id: i, name: section.id, label: section.ariaLabel };
    parts.push(part);
  });

  const closeMenu = () => {
    setShowMenu(false);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const escFunction = (event) => {
      if (event.key === "Escape") {
        showMenu && closeMenu();
      }
    };

    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [showMenu]);

  return (
    <AnimatePresence mode="wait">
      {showMenu && (
        <motion.div
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className={styles.backdrop}
          onClick={closeMenu}
        >
          <motion.div variants={menu} className={styles.menu} data-menu>
            <Togglemenu
              variant="closeMenu"
              onClick={closeMenu}
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
                      <motion.a
                        href={`#${name}`}
                        onClick={closeMenu}
                        className={styles.link}
                        variants={linkVariants}
                        whileHover="hover"
                      >
                        {label}
                      </motion.a>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </nav>
            <motion.ul
              className={styles.socnetList}
              variants={socnetListVariants}
            >
              {socNets.map(({ text, src }, i) => {
                return (
                  <motion.li
                    key={i}
                    className={styles.socnetItem}
                    variants={socnetItemVariants}
                  >
                    <motion.a
                      href={src}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className={styles.socnetLink}
                      variants={linkVariants}
                      whileHover="hover"
                    >
                      {text}
                    </motion.a>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
