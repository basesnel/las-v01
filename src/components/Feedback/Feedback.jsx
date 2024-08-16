import Section from "../Section/Section";
import Heading from "../Heading/Heading";

import styles from "./styles.module.css";

const Feedback = () => {
  return (
    <Section part="feedback" variant="dark" label="write us">
      <Heading level={2} title="feedback" />
      <form className={styles.form} autoComplete="off">
        <label className={styles.field}>
          <input
            type="text"
            name="name"
            className={styles.input}
            placeholder=" "
          />
          <span className={`${styles.label} ${styles.req}`}>name</span>
        </label>
        <label className={styles.field}>
          <input
            type="tel"
            name="tel"
            className={styles.input}
            placeholder=" "
          />
          <span className={`${styles.label} ${styles.req}`}>phone</span>
        </label>
        <label className={styles.field}>
          <textarea
            name="message"
            className={styles.textarea}
            placeholder=" "
          />
          <span className={`${styles.label}`}>message</span>
        </label>
        <button className={styles.button} type="submit">
          send
        </button>
      </form>
    </Section>
  );
};

export default Feedback;
