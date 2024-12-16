import { useState, useEffect } from "react";

import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

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
  const [userMessage, setUserMessage] = useLocalStorage("message", "");

  const [toastVisible, setToastVisible] = useState(false);

  const onHandleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setUserName(value);
        break;

      case "phone":
        setUserPhone(value);
        break;

      case "message":
        setUserMessage(value);
        break;

      default:
        return;
    }

    if (!toastVisible) {
      Toastify({
        text: "This form is in test development. Your feedback won't be send. But you can use the contacts.",
        duration: "5000",
        gravity: "bottom",
        style: {
          width: "calc(100% - 40px)",
          maxWidth: "400px",
          right: "20px",
          bottom: "20px",
          background: "#f0f0f0",
          color: "#171717",
        },
      }).showToast();
      setToastVisible(true);
      setTimeout(() => {
        setToastVisible(false);
      }, 7000);
    }
  };

  const onSubmitFeedback = (e) => {
    e.preventDefault();
    new FormData(e.currentTarget).forEach((value, name) =>
      console.log(`${name}: ${value}`)
    );
    e.currentTarget.reset();
  };

  const onResetFeedback = (e) => {
    setUserName("");
    setUserPhone("");
    setUserMessage("");
  };

  return (
    <form
      className={styles.form}
      autoComplete="off"
      onSubmit={onSubmitFeedback}
      onReset={onResetFeedback}
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
        <textarea
          name="message"
          value={userMessage}
          className={styles.textarea}
          placeholder=" "
          onChange={onHandleChange}
        />
        <span className={`${styles.label}`}>{message.uk}</span>
      </label>
      <Button type="submit" caption={send.uk} />
      <Button type="reset" caption={reset.uk} />
    </form>
  );
};

export default Feedback;
