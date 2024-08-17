import Logoltwebp from "../../assets/logo/logo-light-130.webp";
import Logoltpng from "../../assets/logo/logo-light-130.png";
import Logodkwebp from "../../assets/logo/logo-dark-130.webp";
import Logodkpng from "../../assets/logo/logo-dark-130.png";

import styles from "./styles.module.css";

const Logo = ({ isDark }) => {
  return (
    <a href="#" className={styles.logo} aria-label="logo">
      <picture focusable="false" aria-hidden="true">
        <source srcSet={isDark ? Logodkwebp : Logoltwebp} type="image/webp" />
        <img
          srcSet={isDark ? Logodkpng : Logoltpng}
          src={isDark ? Logodkpng : Logoltpng}
          alt="logo"
          width={100}
          height={100}
          className={styles.image}
        />
      </picture>
    </a>
  );
};

export default Logo;
