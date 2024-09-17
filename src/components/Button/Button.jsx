import styles from "./styles.module.css";

const Button = (props) => {
  const { type, caption, onClick, isDisabled, mode, ...delegated } = props;
  const modification = mode ? `${styles[mode]}` : "";

  return (
    <button
      className={`${styles.button} ${modification}`}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      {...delegated}
    >
      <span className={styles.span}>{caption}</span>
    </button>
  );
};

export default Button;
