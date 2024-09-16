import styles from "./styles.module.css";

const Subtitle = ({ mode, children }) => {
  const modification = mode ? `${styles[mode]}` : "";

  return <p className={`${styles.subtitle} ${modification}`}>{children}</p>;
};

export default Subtitle;
