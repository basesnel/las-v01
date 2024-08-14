import styles from "./styles.module.css";

const Togglemenu = ({ variant, handleClick, children, ...delegated }) => {
  const variation = variant ? `${styles[variant]}` : "";

  return (
    <button
      className={`${styles.openMenu} ${variation}`}
      onClick={handleClick}
      type="button"
      {...delegated}
    >
      {children}
    </button>
  );
};

export default Togglemenu;
