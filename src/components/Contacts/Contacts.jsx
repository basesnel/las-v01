import { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Section from "../Section/Section";
import Heading from "../Heading/Heading";
import Subtitle from "../Subtitle/Subtitle";
import Text from "../Text/Text";

import contacts from "../../constants/contacts";

import icons from "../../assets/icons.svg";

import styles from "./styles.module.css";

import { contactItem, contactLink, contactIcon } from "./variants";

const Contacts = () => {
  const { title, subtitle1, text, list } = contacts;

  return (
    <Section
      colorMode="dark"
      sectionVariant="contacts"
      containerVariant="contacts"
    >
      <div className={styles.content}>
        <Heading level={3} title={title.uk} />
        <address className={styles.address}>
          <ContactList list={list} />
        </address>
      </div>
      <aside className={styles.aside}>
        <Subtitle mode="contacts">{subtitle1.uk}</Subtitle>
        <Text variant="contacts">{text.uk}</Text>
      </aside>
    </Section>
  );
};

const ContactList = ({ list }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.8, once: true });

  return (
    <ul ref={ref}>
      {list.map(({ id, text, src, icon }) => {
        if (id < 4)
          return (
            <motion.li
              key={id}
              className={styles.item}
              style={{ originX: 0, originY: 0.5 }}
              variants={contactItem}
              initial="hidden"
              animate={isInView && "visible"}
              transition={{
                delay: 0.4 + id * 0.2,
                type: "spring",
                stiffness: 300,
              }}
            >
              <Contact src={src} text={text} icon={icon} />
            </motion.li>
          );
      })}
    </ul>
  );
};

const Contact = ({ src, text, icon }) => {
  const control = useAnimation();

  const handleMouseEnter = () => {
    control.start("hover");
  };

  const handleMouseLeave = () => {
    control.start("initial");
  };

  return (
    <motion.a
      href={src}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={styles.link}
      style={{ originX: 0, originY: 0.5 }}
      variants={contactLink}
      whileHover="hover"
      whileFocus="hover"
      whileTap="tap"
      onMouseEnter={handleMouseEnter}
      onFocus={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onBlur={handleMouseLeave}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        focusable="false"
        aria-hidden={true}
        className={styles.icon}
        variants={contactIcon}
        animate={control}
      >
        <use href={`${icons}#${icon}`}></use>
      </motion.svg>
      <span className={styles.text}>{text.uk}</span>
    </motion.a>
  );
};

export default Contacts;
