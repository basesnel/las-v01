import Section from "../Section/Section";
import Subtitle from "../Subtitle/Subtitle";
import Heading from "../Heading/Heading";
import services from "../../constants/services";
import sections from "../../constants/sections";

import styles from "./styles.module.css";

const Services = () => {
  return (
    <Section part={sections[2].id} variant="dark" label={sections[2].uk}>
      <Subtitle>spend your time with the best masters</Subtitle>
      <Heading level={2} title="services and prices" />
      <ul className={styles.list}>
        {services.map(({ id, service, price }) => {
          return (
            <li key={id} className={styles.item}>
              <span className={styles.service}>{service}</span>
              <span className={styles.price}>from ${price}</span>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Services;
