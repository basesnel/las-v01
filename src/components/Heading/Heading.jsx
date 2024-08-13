import styles from "./styles.module.css";

const Heading = ({ level, title }) => {
  switch (level) {
    case 1:
      return <h1 className={`${styles.heading} ${styles.heading01}`}>{title}</h1>;

    case 2:
      return (
        <h2 className={`${styles.heading} ${styles.heading02}`}>{title}</h2>
      );

    case 3:
      return <h3 className={styles.heading03}>{title}</h3>;

    default:
      return null;
  }
};

export default Heading;
