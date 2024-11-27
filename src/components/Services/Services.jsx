import { motion } from "framer-motion";
import Section from "../Section/Section";
import Subtitle from "../Subtitle/Subtitle";
import Heading from "../Heading/Heading";
import services from "../../constants/services";

import styles from "./styles.module.css";
import Button from "../Button/Button";

const outerList = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const innerList = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      delay: 0.8,
      type: "spring",
      stiffness: 100,
    },
  },
};

const itemVariants = {
  hiddenLeft: { scale: 0.5, opacity: 0, x: -200 },
  hiddenRight: { scale: 0.5, opacity: 0, x: 200 },
  // hidden: { opacity: 0, x: -100 },
  visible: {
    scale: 1,
    opacity: 1,
    x: 0,
    // transition: { delay: 1.3, type: "spring", stiffness: 100 },
  },
};

const Services = () => {
  const { subTitle, title, reference, list } = services;

  return (
    <Section indexSection={2} colorMode="dark" sectionVariant="services">
      <Subtitle>{subTitle.uk}</Subtitle>
      <Heading level={2} mode="service" title={title.uk} />
      <motion.ul
        className={styles.list}
        variants={outerList}
        initial="hidden"
        whileInView="visible"
      >
        <li className={styles.item}>
          <motion.ul
            className={styles.innerList}
            variants={innerList}
            initial="hidden"
            whileInView="visible"
          >
            {list.map(({ id, service, price }) => {
              if (id < 4)
                return (
                  <motion.li
                    key={id}
                    className={styles.innerItem}
                    variants={itemVariants}
                    initial={id % 2 ? "hiddenLeft" : "hiddenRight"}
                    whileInView="visible"
                    transition={{
                      delay: 1.3 + id * 0.5,
                      type: "spring",
                      stiffness: 100,
                    }}
                  >
                    <span className={styles.service}>{service.uk}</span>
                    <span className={styles.price}>{price.uk()}</span>
                  </motion.li>
                );
            })}
          </motion.ul>
        </li>
        <li className={styles.item}>
          <motion.ul
            className={styles.innerList}
            variants={innerList}
            initial="hidden"
            whileInView="visible"
          >
            {list.map(({ id, service, price }) => {
              if (id >= 4)
                return (
                  <motion.li
                    key={id}
                    className={styles.innerItem}
                    variants={itemVariants}
                    initial={id % 2 ? "hiddenLeft" : "hiddenRight"}
                    whileInView="visible"
                    transition={{
                      delay: 1.3 + id * 0.5,
                      type: "spring",
                      stiffness: 100,
                    }}
                  >
                    <span className={styles.service}>{service.uk}</span>
                    <span className={styles.price}>{price.uk()}</span>
                  </motion.li>
                );
            })}
          </motion.ul>
        </li>
      </motion.ul>
      <Button type="button" caption={reference.uk} />
    </Section>
  );
};

export default Services;
