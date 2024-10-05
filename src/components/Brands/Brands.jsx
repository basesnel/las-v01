import Section from "../Section/Section";
import Subtitle from "../Subtitle/Subtitle";
import Heading from "../Heading/Heading";
import Link from "../Link/Link";
import Icon from "../Icon/Icon";
import brands from "../../constants/brands";

import styles from "./styles.module.css";

const Brands = () => {
  const { title, subTitle, carBrands } = brands;

  return (
    <Section indexSection={8}>
      <Subtitle>{subTitle.uk}</Subtitle>
      <Heading level={2} title={title.uk} />
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

export default Brands;
