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
  const { subTitle, title, reference } = services;

  return (
    <Section indexSection={2} colorMode="dark" sectionVariant="services">
      <Subtitle>{subTitle.uk}</Subtitle>
      <Heading level={2} mode="service" title={title.uk} />
      <List />
      {/* <motion.ul
        className={styles.list}
        variants={outerList}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <li className={styles.item}>
          <motion.ul
            className={styles.innerList}
            variants={innerList}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
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
                    initial="hidden"
                    whileInView="visible"
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: id * 0.4,
                    }}
                    viewport={{ once: true }}
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
            viewport={{ once: true }}
          >
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
                    initial="hidden"
                    whileInView="visible"
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: id * 0.4,
                    }}
                    viewport={{ once: true }}
                  >
                    <span className={styles.service}>{service.uk}</span>
                    <span className={styles.price}>{price.uk()}</span>
                  </motion.li>
                );
            })}
          </motion.ul>
        </li>
      </motion.ul> */}
      <Button type="button" caption={reference.uk} />
    </Section>
  );
};

const List = () => {
  const { list } = services;

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "all" });

  return (
    <div ref={ref}>
      <ul
        className={styles.list}
        variants={outerList}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <li className={styles.item}>
          <motion.ul
            className={styles.innerList}
            variants={innerList}
            // animate={isInView && "visible"}
            // initial="hidden"
            // whileInView="visible"
            // viewport={{ once: true }}
          >
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
                    // initial="hidden"
                    // animate={isInView && "visible"}
                    // transition={{
                    //   type: "tween",
                    //   duration: 0.5,
                    //   delay: 0.4,
                    // }}
                    // viewport={{ once: true }}
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
            // animate={isInView && "visible"}
            // initial="hidden"
            // whileInView="visible"
            // viewport={{ once: true }}
          >
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
                    // initial="hidden"
                    // animate={isInView && "visible"}
                    // transition={{
                    //   type: "tween",
                    //   duration: 0.5,
                    //   delay: 0.4,
                    // }}
                    // viewport={{ once: true }}
                  >
                    <span className={styles.service}>{service.uk}</span>
                    <span className={styles.price}>{price.uk()}</span>
                  </motion.li>
                );
            })}
          </motion.ul>
        </li>
      </ul>
    </div>
  );
};

export default Services;
