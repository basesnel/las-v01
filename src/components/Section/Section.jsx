import styles from "./styles.module.css";

const Section = ({ children }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>{children}</div>
    </section>
  );
};

export default Section;
