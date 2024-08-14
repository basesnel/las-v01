import Section from "../Section/Section";
import Subtitle from "../Subtitle/Subtitle";
import Heading from "../Heading/Heading";

import styles from "./styles.module.css";

const Services = () => {
  return (
    <Section variant="dark">
      <Subtitle>spend your time with the best masters</Subtitle>
      <Heading level={2} title="services and prices" />
      <p className={styles.date}>Price list</p>
    </Section>
  );
};

export default Services;
