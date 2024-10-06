import logo from "../../constants/logo";

import styles from "./styles.module.css";

const Logo = ({ isDark, variant }) => {
  const { label, liteWBP, litePNG, darkWBP, darkPNG } = logo;

  const variation = variant ? `${styles[variant]}` : "";

  return (
    <a href="#" className={`${styles.logo} ${variation}`} aria-label={label.uk}>
      <picture focusable="false" aria-hidden="true">
        <source srcSet={darkWBP} media="(min-width: 768px)" type="image/webp" />

        <source srcSet={darkPNG} media="(min-width: 768px)" type="image/png" />

        <source srcSet={isDark ? darkWBP : liteWBP} type="image/webp" />

        <img
          srcSet={isDark ? darkPNG : litePNG}
          src={isDark ? darkPNG : litePNG}
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
