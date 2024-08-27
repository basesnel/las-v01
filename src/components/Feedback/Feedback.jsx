import Section from "../Section/Section";
import Heading from "../Heading/Heading";

import styles from "./styles.module.css";

const Feedback = () => {
  const onSubmitFeedback = (e) => {
    e.preventDefault();
    new FormData(e.currentTarget).forEach((value, name) =>
      console.log(`${name}: ${value}`)
    );
    e.currentTarget.reset();
  };

  return (
    <Section variant="dark" label="write us">
      <Heading level={3} title="feedback" />
      <form
        className={styles.form}
        autoComplete="off"
        onSubmit={onSubmitFeedback}
      >
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
          <span className={styles.span}>send</span>
        </button>
      </form>
    </Section>
  );
};

export default Feedback;
