import Logowebp from "../../assets/logo/logo-light-130.webp";
import Logopng from "../../assets/logo/logo-light-130.png";

import styles from "./styles.module.css";

const Logo = () => {
  return (
    <a href="#" className={styles.logo} aria-label="logo">
      <picture focusable="false" aria-hidden="true">
        <source srcSet={Logowebp} type="image/webp" />
        <img
          srcSet={Logopng}
          src={Logopng}
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
