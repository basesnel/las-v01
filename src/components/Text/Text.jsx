import styles from "./styles.module.css";

const Text = ({ variant, mode, children }) => {
  const variation = variant ? `${styles[variant]}` : "";
  const modification = mode ? `${styles[mode]}` : "";

  return (
    <p className={`${styles.text} ${variation} ${modification}`}>{children}</p>
  );
};

export default Text;
