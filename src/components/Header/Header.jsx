import { useState, useEffect } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Container from "../Container/Container";
import Togglemenu from "../Togglemenu/Togglemenu";
import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";
import Spinner from "../Spinner/Spinner";

// import useOnloadEffect from "../../hooks/useOnloadEffect";

import loadedParts from "../../helpers/loadedParts";

import styles from "./styles.module.css";

import { list, item, link } from "./variants";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isDomLoaded, setIsDomLoaded] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [bgHidden, setBgHidden] = useState(true);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    console.log(latest, previous);

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    if (latest > 150) {
      setBgHidden(false);
    } else {
      setBgHidden(true);
    }
  });

  // useEffect(() => {
  //   const unsub = scrollY.on("change", (latest) => console.log(latest));

  //   return () => unsub();
  // }, [scrollY]);

  // isDomLoaded && console.log("page is loaded:", isDomLoaded);

  // useOnloadEffect(() => setTimeout(() => setIsDomLoaded(true), 500));

  useEffect(() => {
    setTimeout(() => setIsDomLoaded(true), 500);
  }, []);

  const openMenu = () => {
    setShowMenu(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <motion.header
      className={styles.header}
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <motion.div
        className={styles.bground}
        aria-hidden={true}
        variants={{ visible: { opacity: 0.75 }, hidden: { opacity: 0 } }}
        animate={bgHidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      />
      <Container variant="header">
        <Logo />
        <nav className={styles.nav}>
          {isDomLoaded ? (
            <LoadedParts />
          ) : (
            <div
              className={styles.loaderContainer}
              aria-label="loader"
              aria-hidden={true}
            >
              <motion.div
                className={styles.loader}
                animate={{ width: "100%" }}
                transition={{ ease: "linear", duration: 2, repeat: Infinity }}
              />
            </div>
          )}
        </nav>
        {isDomLoaded ? (
          <Togglemenu
            onClick={openMenu}
            type="button"
            aria-label="Open the mobile menu"
            icon="icon-menu"
          />
        ) : (
          <Spinner />
        )}

        <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      </Container>
    </motion.header>
  );
};

const LoadedParts = () => {
  const parts = loadedParts();

  return (
    <motion.ul
      className={styles.list}
      variants={list}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {parts.map(({ id, name, label }) => (
        <motion.li
          key={id}
          className={styles.item}
          style={{ originX: 1, originY: 0.5 }}
          variants={item}
        >
          <motion.a
            href={`#${name}`}
            className={styles.link}
            variants={link}
            whileHover="hover"
            whileFocus="hover"
            whileTap="tap"
          >
            {label}
          </motion.a>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Header;
