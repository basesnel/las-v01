import icons from "../../assets/icons.svg";

import styles from "./styles.module.css";

const IconButton = (props) => {
  const { icon, caption, label, inverted, ...delegated } = props;

  return (
    <button
      aria-label={label}
      className={
        label ? `${styles.button}} ${styles.iconOnly}` : `${styles.button}`
      }
      {...delegated}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        focusable="false"
        aria-hidden={true}
        style={inverted && { transform: "rotate(180deg)" }}
        className={styles.icon}
      >
        <use href={`${icons}#${icon}`}></use>
      </svg>
      <span className={styles.visuallyHidden}>{caption}</span>
    </button>
  );
};

export default IconButton;
