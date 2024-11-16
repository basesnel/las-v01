import icons from "../../assets/icons.svg";

import styles from "./styles.module.css";

const Reference = (props) => {
  const { caption, src } = props;
  // const modification = mode ? `${styles[mode]}` : "";

  return (
    <a href={src} className={styles.reference}>
      {caption}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        focusable="false"
        aria-hidden={true}
        className={styles.icon}
      >
        <use href={`${icons}#arrow`}></use>
      </svg>
    </a>
  );
};

export default Reference;
