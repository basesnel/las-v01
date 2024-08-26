import Feedback from "../../components/Feedback/Feedback";
import Contacts from "../../components/Contacts/Contacts";
import Heading from "../Heading/Heading";

import styles from "./styles.module.css";

const ContactUs = () => {
  return (
    <section id="contacts-us" aria-label="contact us">
      <Heading level={2} mode="hidden" title="Contact us" />
      <Feedback />
      <Contacts />
    </section>
  );
};

export default ContactUs;
