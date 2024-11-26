import { motion } from "framer-motion";
import Section from "../Section/Section";
import Subtitle from "../Subtitle/Subtitle";
import Heading from "../Heading/Heading";
import services from "../../constants/services";

import styles from "./styles.module.css";
import Button from "../Button/Button";

const listVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const Services = () => {
  const { subTitle, title, reference, list } = services;

  return (
    <Section indexSection={2} colorMode="dark" sectionVariant="services">
      <Subtitle>{subTitle.uk}</Subtitle>
      <Heading level={2} mode="service" title={title.uk} />
      {/* <AnimatePresence mode="wait"> */}
      <motion.ul
        className={styles.list}
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
      >
        <li className={styles.item}>
          <ul className={styles.innerList}>
            {list.map(({ id, service, price }) => {
              if (id < 4)
                return (
                  <motion.li
                    key={id}
                    className={styles.innerItem}
                    variants={itemVariants}
                    initial={id % 2 ? "hiddenLeft" : "hiddenRight"}
                    whileInView="visible"
                  >
                    <span className={styles.service}>{service.uk}</span>
                    <span className={styles.price}>{price.uk()}</span>
                  </motion.li>
                );
            })}
          </ul>
        </li>
        <li className={styles.item}>
          <ul className={styles.innerList}>
            {list.map(({ id, service, price }) => {
              if (id >= 4)
                return (
                  <motion.li
                    key={id}
                    className={styles.innerItem}
                    variants={itemVariants}
                    initial={id % 2 ? "hiddenLeft" : "hiddenRight"}
                    whileInView="visible"
                  >
                    <span className={styles.service}>{service.uk}</span>
                    <span className={styles.price}>{price.uk()}</span>
                  </motion.li>
                );
            })}
          </ul>
        </li>
      </motion.ul>
      {/* </AnimatePresence> */}
      <Button type="button" caption={reference.uk} />
    </Section>
  );
};

export default Services;
