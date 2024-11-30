import { motion } from "framer-motion";
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

  const contactLink = {
    // hidden: { y: 100, scale: 0, opacity: 0 },
    // visible: {
    //   y: 0,
    //   scale: 1,
    //   opacity: 1,
    //   transition: { delay: isHover ? 0 : 0.5, type: "spring", stiffness: 300 },
    // },
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
      rotate: 0,
      scale: 1,
      backgroundColor: "#f67307",
      fill: "#fff",
    },
    hover: {
      rotate: 90,
      scale: [1.2, 1],
      backgroundColor: "#FFF",
      fill: "#f67307",
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
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
                    <motion.a
                      href={src}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className={styles.link}
                      variants={contactLink}
                      whileHover="hover"
                      whileFocus="hover"
                      whileTap="tap"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        focusable="false"
                        aria-hidden={true}
                        className={styles.icon}
                      >
                        <use href={`${icons}#${icon}`}></use>
                      </svg>
                      <span className={styles.text}>{text.uk}</span>
                    </motion.a>
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

export default Contacts;
