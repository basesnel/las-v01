import Feedback from "../../components/Feedback/Feedback";
import Contacts from "../../components/Contacts/Contacts";
import Heading from "../Heading/Heading";
import sections from "../../constants/sections";

// import styles from "./styles.module.css";

const ContactUs = () => {
  const { id, section } = sections[7];

  return (
    <section id={id} aria-label={section.uk}>
      <Heading level={2} mode="hidden" title="Contact us" />
      <Feedback />
      <Contacts />
    </section>
  );
};

export default ContactUs;
