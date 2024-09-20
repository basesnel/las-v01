import Section from "../Section/Section";
import Feedback from "../../components/Feedback/Feedback";
import Contacts from "../../components/Contacts/Contacts";
import Heading from "../Heading/Heading";

// import styles from "./styles.module.css";

const ContactUs = () => {
  return (
    <Section indexSection={7}>
      <Heading level={2} mode="hidden" title="Contact us" />
      <Feedback />
      <Contacts />
    </Section>
  );
};

export default ContactUs;
