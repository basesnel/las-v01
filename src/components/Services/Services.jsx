import Section from "../Section/Section";
import Subtitle from "../Subtitle/Subtitle";
import Heading from "../Heading/Heading";
import services from "../../constants/services";

import styles from "./styles.module.css";
import Button from "../Button/Button";

const Services = () => {
  return (
    <Section indexSection={2} colorMode="dark" sectionVariant="service">
      <Subtitle>spend your time with the best masters</Subtitle>
      <Heading level={2} mode="service" title="services and prices" />
      <ul className={styles.list}>
        <li className={styles.item}>
          <ul className={styles.innerList}>
            {services.map(({ id, service, price }) => {
              if (id < 5)
                return (
                  <li key={id} className={styles.innerItem}>
                    <span className={styles.service}>{service}</span>
                    <span className={styles.price}>from ${price}</span>
                  </li>
                );
            })}
          </ul>
        </li>
        <li className={styles.item}>
          <ul className={styles.innerList}>
            {services.map(({ id, service, price }) => {
              if (id >= 5)
                return (
                  <li key={id} className={styles.innerItem}>
                    <span className={styles.service}>{service}</span>
                    <span className={styles.price}>from ${price}</span>
                  </li>
                );
            })}
          </ul>
        </li>
      </ul>
      <Button type="button" caption="online-booking" />
    </Section>
  );
};

export default Services;
