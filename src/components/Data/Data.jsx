import styles from "./styles.module.css";

const Data = ({ mode, children }) => {
  const modification = mode ? `${styles[mode]}` : "";

  return <p className={`${styles.data} ${modification}`}>{children}</p>;
};

export default Data;
