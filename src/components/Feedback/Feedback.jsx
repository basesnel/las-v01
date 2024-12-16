import Section from "../Section/Section";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";

import useLocalStorage from "../../hooks/uselocalStorage";

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

  const [userName, setUserName] = useLocalStorage("name", "");
  const [userPhone, setUserPhone] = useLocalStorage("phone", "");

  const onHandleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setUserName(value);
        break;

      case "phone":
        setUserPhone(value);
        break;

      default:
        return;
    }
  };

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
          value={userName}
          className={styles.input}
          placeholder=" "
          autoComplete="off"
          onChange={onHandleChange}
        />
        <span className={`${styles.label} ${styles.req}`}>{name.uk}</span>
      </label>
      <label className={styles.field}>
        <input
          type="tel"
          name="phone"
          value={userPhone}
          className={styles.input}
          placeholder=" "
          autoComplete="off"
          onChange={onHandleChange}
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
