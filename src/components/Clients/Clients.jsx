import Section from "../Section/Section";
import Subtitle from "../Subtitle/Subtitle";
import Heading from "../Heading/Heading";

import styles from "./styles.module.css";

const Clients = () => {
  return (
    <Section part="clients" label="we works on">
      <Subtitle>repair of any complexity</Subtitle>
      <Heading level={2} title="our clients" />
      <p>List of car brands.</p>
    </Section>
  );
};

export default Clients;
