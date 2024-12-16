import Section from "../Section/Section";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import feedback from "../../constants/feedback";

import styles from "./styles.module.css";

const Feedback = () => {
  const { title, form } = feedback;

  return (
    <Section
      colorMode="dark"
      sectionVariant="feedback"
      containerVariant="feedback"
    >
      <Heading level={3} title={title.uk} />
      <Form form={form} />
    </Section>
  );
};

const Form = ({ form }) => {
  const { name, phone, message, send, reset } = form;

  const onSubmitFeedback = (e) => {
    e.preventDefault();
    new FormData(e.currentTarget).forEach((value, name) =>
      console.log(`${name}: ${value}`)
    );
    e.currentTarget.reset();
  };

  return (
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
        <span className={`${styles.label} ${styles.req}`}>{name.uk}</span>
      </label>
      <label className={styles.field}>
        <input
          type="tel"
          name="tel"
          className={styles.input}
          placeholder=" "
          autoComplete="off"
        />
        <span className={`${styles.label} ${styles.req}`}>{phone.uk}</span>
      </label>
      <label className={styles.field}>
        <textarea name="message" className={styles.textarea} placeholder=" " />
        <span className={`${styles.label}`}>{message.uk}</span>
      </label>
      <Button type="submit" caption={send.uk} />
      <Button type="reset" caption={reset.uk} />
    </form>
  );
};

export default Feedback;
