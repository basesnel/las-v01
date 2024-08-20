import styles from "./styles.module.css";

const Data = ({ children }) => {
  // const variation = variant ? `${styles[variant]}` : "";
  // const modification = mode ? `${styles[mode]}` : "";

  return <p className={`${styles.date}`}>{children}</p>;
};

export default Data;
