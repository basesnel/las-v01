import styles from "./styles.module.css";

const Subtitle = ({ variant, children }) => {
  const variation = variant ? `${styles[variant]}` : "";

  return <p className={`${styles.subtitle} ${variation}`}>{children}</p>;
};

export default Subtitle;
