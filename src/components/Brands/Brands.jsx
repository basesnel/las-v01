import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Section from "../Section/Section";
import Subtitle from "../Subtitle/Subtitle";
import Heading from "../Heading/Heading";

import brands from "../../constants/brands";

import icons from "../../assets/icons.svg";

import { brandItem, brandLink, switchBrand } from "./variants";

import styles from "./styles.module.css";

const Brands = () => {
  const { title, subTitle, brandList } = brands;

  return (
    <Section indexSection={9}>
      <Subtitle>{subTitle.uk}</Subtitle>
      <Heading level={2} title={title.uk} />
      <BrandList brandList={brandList} />
    </Section>
  );
};

const BrandList = ({ brandList }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  return (
    <ul ref={ref} className={styles.list}>
      {brandList.map(({ icon, label }, i) => (
        <motion.li
          key={i}
          className={styles.item}
          style={switchBrand(i)}
          variants={brandItem}
          initial="hidden"
          animate={isInView && "visible"}
          transition={{
            delay: 0.5,
            type: "spring",
            stiffness: 80,
          }}
        >
          <Brand icon={icon} label={label} />
        </motion.li>
      ))}
    </ul>
  );
};

const Brand = ({ icon, label }) => {
  return (
    <motion.a
      href="#"
      aria-label={label.uk}
      className={styles.link}
      variants={brandLink}
      initial="initial"
      whileHover="hover"
      whileFocus="hover"
      whileTap="tap"
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
    </motion.a>
  );
};

export default Brands;
