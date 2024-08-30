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
        {carBrands.map(({ icon }, i) => (
          <li key={i} className={styles.item}>
            <Link src="#" className={styles.link}>
              <Icon
                icon={icon}
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
