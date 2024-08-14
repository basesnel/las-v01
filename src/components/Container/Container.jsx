import styles from "./styles.module.css";

const Container = ({ variant, children }) => {
  const variation = variant ? `${styles[variant]}` : "";

  return <div className={`${styles.container} ${variation}`}>{children}</div>;
};

export default Container;
