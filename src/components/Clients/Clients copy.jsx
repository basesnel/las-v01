import Section from "../Section/Section";
import Subtitle from "../Subtitle/Subtitle";
import Heading from "../Heading/Heading";
import Link from "../Link/Link";
import Icon from "../Icon/Icon";
import carBrands from "../../constants/carBrands";

import styles from "./styles.module.css";

const Clients = () => {
  return (
    <Section part="clients" label="we works on">
      <Subtitle>repair of any complexity</Subtitle>
      <Heading level={2} title="our clients" />
      <ul className={styles.list}>
        {carBrands.map(({ icon, iconInv }, i) => (
          <li key={i} className={styles.item}>
            <Link
              src="#"
              className={
                iconInv ? `${styles.link} ${styles.inv}` : `${styles.link}`
              }
            >
              <Icon
                icon={iconInv || icon}
                width={120}
                height={90}
                className={styles.icon}
              />
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Clients;
