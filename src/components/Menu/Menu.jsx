import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Togglemenu from "../Togglemenu/Togglemenu";

import socNets from "../../constants/socials";

import useCloseMenu from "../../hooks/useCloseMenu";

import loadedParts from "../../helpers/loadedParts";

import {
  backdrop,
  position,
  list,
  item,
  link,
  socList,
  socItem,
  socLink,
} from "./variants";

import styles from "./styles.module.css";

const Menu = ({ showMenu, setShowMenu }) => {
  const parts = loadedParts();

  const closeMenu = () => {
    setShowMenu(false);
    document.body.style.overflow = "";
  };

  useCloseMenu(showMenu, closeMenu);

  return createPortal(
    <AnimatePresence mode="wait">
      {showMenu && (
        <motion.div
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={styles.backdrop}
          onClick={closeMenu}
        >
          <motion.div
            className={styles.menuPosition}
            variants={position}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div className={styles.menuContainer}>
              <motion.div
                className={styles.menu}
                onClick={(e) => e.stopPropagation()}
                data-menu
              >
                <Togglemenu
                  variant="closeMenu"
                  onClick={closeMenu}
                  type="button"
                  aria-label="Close the mobile menu"
                  icon="menu-close"
                />
                <nav>
                  <motion.ul
                    className={styles.list}
                    variants={list}
                    initial="hidden"
                    animate="visible"
                  >
                    {parts.map(({ id, name, label }) => {
                      return (
                        <motion.li
                          key={id}
                          className={styles.item}
                          style={{ originX: 0, originY: 0.5 }}
                          variants={item}
                        >
                          <motion.a
                            href={`#${name}`}
                            onClick={closeMenu}
                            className={styles.link}
                            style={{ originX: 0, originY: 0.5 }}
                            variants={link}
                            whileHover="hover"
                            whileFocus="hover"
                            whileTap="tap"
                          >
                            {label}
                          </motion.a>
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                </nav>
                <motion.ul className={styles.socnetList} variants={socList}>
                  {socNets.map(({ text, src }, i) => {
                    return (
                      <motion.li
                        key={i}
                        className={styles.socnetItem}
                        variants={socItem}
                        style={{ originX: 1, originY: 1 }}
                      >
                        <motion.a
                          href={src}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className={styles.socnetLink}
                          variants={socLink}
                          whileHover="hover"
                          whileFocus="hover"
                          whileTap="tap"
                        >
                          {text}
                        </motion.a>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Menu;
