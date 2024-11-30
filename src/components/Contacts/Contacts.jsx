// import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Section from "../Section/Section";
import Heading from "../Heading/Heading";
import Subtitle from "../Subtitle/Subtitle";
import Text from "../Text/Text";
import contacts from "../../constants/contacts";

import icons from "../../assets/icons.svg";

import styles from "./styles.module.css";

const Contacts = () => {
  const { title, list, subtitle1, text } = contacts;

  const contactList = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const contactItem = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Section
      colorMode="dark"
      sectionVariant="contacts"
      containerVariant="contacts"
    >
      <div className={styles.content}>
        <Heading level={3} title={title.uk} />
        <address className={styles.address}>
          <motion.ul
            variants={contactList}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {list.map(({ id, text, src, icon }) => {
              if (id < 4)
                return (
                  <motion.li
                    key={id}
                    className={styles.item}
                    variants={contactItem}
                    initial="hidden"
                    whileInView="visible"
                    transition={{
                      delay: id * 0.2,
                      type: "spring",
                      stiffness: 300,
                    }}
                    viewport={{ once: true }}
                  >
                    <Contact src={src} text={text} icon={icon} />
                  </motion.li>
                );
            })}
          </motion.ul>
        </address>
      </div>
      <aside className={styles.aside}>
        <Subtitle mode="contacts">{subtitle1.uk}</Subtitle>
        <Text variant="contacts">{text.uk}</Text>
      </aside>
    </Section>
  );
};

const Contact = ({ src, text, icon }) => {
  // const [isHover, setIsHover] = useState(false);

  const control = useAnimation();

  const handleMouseEnter = () => {
    control.start("hover");
    // setIsHover(true);
  };

  const handleMouseLeave = () => {
    control.start("initial");
    // setIsHover(false);
  };

  const contactLink = {
    hover: {
      scale: 1.2,
      x: 20,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
    tap: {
      scale: 0.8,
    },
  };

  const contactIcon = {
    initial: {
      scale: 1,
      rotate: 0,
    },
    hover: {
      scale: [1, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2],
      rotate: [0, 0, -13, 8, -5, 3, -2, 1, 0],
      transition: {
        delay: 0.5,
        duration: 0.5,
        times: [0, 0.3, 0.4, 0.64, 0.8, 0.89, 0.95, 0.99, 1],
      },
    },
  };

  return (
    <motion.a
      href={src}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={styles.link}
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
