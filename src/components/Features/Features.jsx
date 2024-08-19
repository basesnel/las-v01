import Section from "../Section/Section";
import Heading from "../Heading/Heading";
import Subtitle from "../Subtitle/Subtitle";

import styles from "./styles.module.css";

const Features = () => {
  return (
    <Section part="features" label="our benefits and features">
      <Subtitle>why people come to us?</Subtitle>
      <Heading level={2} title="our benefits" />
      <p>List of benefits.</p>
    </Section>
  );
};

export default Features;
