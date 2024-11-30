// import { motion } from "framer-motion";
import Section from "../Section/Section";
import Subtitle from "../Subtitle/Subtitle";
import Heading from "../Heading/Heading";
// import Link from "../Link/Link";
// import Icon from "../Icon/Icon";
import brands from "../../constants/brands";

import icons from "../../assets/icons.svg";

import styles from "./styles.module.css";

const Brands = () => {
  const { title, subTitle, carBrands } = brands;

  return (
    <Section indexSection={8}>
      <Subtitle>{subTitle.uk}</Subtitle>
      <Heading level={2} title={title.uk} />
      <ul className={styles.list}>
        {carBrands.map(({ icon, label }, i) => (
          <li key={i} className={styles.item}>
            {/* <Link src="#" label={label.uk} className={styles.link}>
              <Icon
                icon={icon}
                width={120}
                height={90}
                className={styles.icon}
              />
            </Link> */}
            <a
              href="#"
              aria-label={label.uk}
              className={styles.link}
              // variants={contactLink}
              // whileHover="hover"
              // whileFocus="hover"
              // whileTap="tap"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={120}
                height={90}
                focusable="false"
                aria-hidden={true}
                className={styles.icon}
              >
                <use href={`${icons}#${icon}`}></use>
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Brands;
