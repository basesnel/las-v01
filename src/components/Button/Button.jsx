import styles from "./styles.module.css";

const Button = (props) => {
  const { type, caption, onClick, isDisabled, ...delegated } = props;

  return (
    <button
      className={styles.button}
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
