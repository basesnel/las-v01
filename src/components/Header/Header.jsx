import { useState } from "react";
import sections from "../../constants/sections";
import Container from "../Container/Container";
import Togglemenu from "../Togglemenu/Togglemenu";
import Icon from "../Icon/Icon";
import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";

import styles from "./styles.module.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <header className={styles.header}>
      <Container variant="header">
        <Logo />
        <nav className={styles.nav}>
          <ul className={styles.list}>
            {sections.map(({ id, section }) => (
              <li key={id} className={styles.item}>
                <a href={`#${id}`} className={styles.link}>
                  {section.uk}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Togglemenu onClick={openMenu} aria-label="Open the mobile menu">
          <Icon
            icon="icon-menu"
            width={28}
            height={28}
            className={styles.icon}
          />
        </Togglemenu>
        <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      </Container>
    </header>
  );
};

export default Header;
