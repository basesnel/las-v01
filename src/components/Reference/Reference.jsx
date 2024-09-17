import styles from "./styles.module.css";

const Reference = (props) => {
  const { caption, src, mode, ...delegated } = props;
  const modification = mode ? `${styles[mode]}` : "";

  return (
    <a
      href={src}
      className={`${styles.reference} ${modification}`}
      {...delegated}
    >
      <span className={styles.span}>{caption}</span>
    </a>
  );
};

export default Reference;
