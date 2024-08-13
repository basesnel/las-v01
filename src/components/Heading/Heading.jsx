import styles from "./styles.module.css";

const Heading = ({ level, variant, title }) => {
  const variation = variant ? `${styles[variant]}` : "";

  switch (level) {
    case 1:
      return (
        <h1 className={`${styles.heading}  ${variation} ${styles.heading01}`}>
          {title}
        </h1>
      );

    case 2:
      return (
        <h2 className={`${styles.heading}  ${variation} ${styles.heading02}`}>
          {title}
        </h2>
      );

    case 3:
      return (
        <h3 className={`${styles.heading}  ${variation} ${styles.heading03}`}>
          {title}
        </h3>
      );

    default:
      return null;
  }
};

export default Heading;
