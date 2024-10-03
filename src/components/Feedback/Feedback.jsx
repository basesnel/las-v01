import Section from "../Section/Section";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";

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
    <Section
      colorMode="dark"
      sectionVariant="feedback"
      containerVariant="feedback"
    >
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
            autoComplete="off"
          />
          <span className={`${styles.label} ${styles.req}`}>name</span>
        </label>
        <label className={styles.field}>
          <input
            type="tel"
            name="tel"
            className={styles.input}
            placeholder=" "
            autoComplete="off"
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
        <Button type="submit" caption="send" />
        <Button type="reset" caption="reset" />
      </form>
    </Section>
  );
};

export default Feedback;
