import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Section from "../Section/Section";
import Subtitle from "../Subtitle/Subtitle";
import Heading from "../Heading/Heading";
import services from "../../constants/services";

import styles from "./styles.module.css";
import Button from "../Button/Button";

import { outerList, innerList, innerItem } from "./variants";

const Services = () => {
  const { subTitle, title, reference, list } = services;

  return (
    <Section indexSection={2} colorMode="dark" sectionVariant="services">
      <Subtitle>{subTitle.uk}</Subtitle>
      <Heading level={2} mode="service" title={title.uk} />
      <List list={list} />
      <Button type="button" caption={reference.uk} />
    </Section>
  );
};

const List = ({ list }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.8, once: true });

  return (
    <div ref={ref}>
      <motion.ul
        className={styles.list}
        variants={outerList}
        initial="hidden"
        animate={isInView && "visible"}
      >
        <li className={styles.item}>
          <motion.ul className={styles.innerList} variants={innerList}>
            {list.map(({ id, service, price }) => {
              if (id < 4)
                return (
                  <motion.li
                    key={id}
                    className={styles.innerItem}
                    variants={innerItem}
                    style={
                      id % 2
                        ? { originX: 1, originY: 0.5 }
                        : { originX: 0, originY: 0.5 }
                    }
                  >
                    <span className={styles.service}>{service.uk}</span>
                  </motion.li>
                );
            })}
          </motion.ul>
        </li>
        <li className={styles.item}>
          <motion.ul className={styles.innerList} variants={innerList}>
            {list.map(({ id, service, price }) => {
              if (id >= 4)
                return (
                  <motion.li
                    key={id}
                    className={styles.innerItem}
                    variants={innerItem}
                    style={
                      id % 2
                        ? { originX: 1, originY: 0.5 }
                        : { originX: 0, originY: 0.5 }
                    }
                  >
                    <span className={styles.service}>{service.uk}</span>
                  </motion.li>
                );
            })}
          </motion.ul>
        </li>
      </motion.ul>
    </div>
  );
};

export default Services;
