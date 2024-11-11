import Section from "../Section/Section";
import Subtitle from "../Subtitle/Subtitle";
import Heading from "../Heading/Heading";
import services from "../../constants/services";

import styles from "./styles.module.css";
import Button from "../Button/Button";

const Services = () => {
  const { subTitle, title, reference, list } = services;

  return (
    <Section indexSection={2} colorMode="dark" sectionVariant="service">
      <Subtitle>{subTitle.uk}</Subtitle>
      <Heading level={2} mode="service" title={title.uk} />
      <ul className={styles.list}>
        <li className={styles.item}>
          <ul className={styles.innerList}>
            {list.map(({ id, service, price }) => {
              if (id < 4)
                return (
                  <li key={id} className={styles.innerItem}>
                    <span className={styles.service}>{service.uk}</span>
                    <span className={styles.price}>{price.uk()}</span>
                  </li>
                );
            })}
          </ul>
        </li>
        <li className={styles.item}>
          <ul className={styles.innerList}>
            {list.map(({ id, service, price }) => {
              if (id >= 4)
                return (
                  <li key={id} className={styles.innerItem}>
                    <span className={styles.service}>{service.uk}</span>
                    <span className={styles.price}>{price.uk()}</span>
                  </li>
                );
            })}
          </ul>
        </li>
      </ul>
      <Button type="button" caption={reference.uk} />
    </Section>
  );
};

export default Services;
