import { motion } from "framer-motion";

import Section from "../Section/Section";
import Subtitle from "../Subtitle/Subtitle";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";
import Data from "../Data/Data";
import Reference from "../Reference/Reference";
import Slider from "../Slider/Slider";

import banner from "../../constants/banner";
import socNets from "../../constants/socials";

import styles from "./styles.module.css";

const Banner = () => {
  const { subTitle, text, link, data } = banner;

  const socList = {
    hidden: { opacity: 0, scale: 0.8, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: -90,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const socItem = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  const socLink = {
    hover: {
      scale: 1.2,
      color: "#f67307",
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
    tap: {
      scale: 0.8,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <Section indexSection={0} sectionVariant="banner" containerVariant="banner">
      <div className={styles.content}>
        <Subtitle mode="banner">{subTitle.uk}</Subtitle>
        <Heading level={1} title="liashenko auto service" />
        <Text mode="banner">{text.uk}</Text>
        <Reference
          src="#services"
          caption={link.uk}
          mode="light"
          part="banner"
        />
        <Data mode="banner">{data.uk}</Data>
        <Slider />
      </div>
      <aside className={styles.aside}>
        <motion.ul
          className={styles.socNetList}
          variants={socList}
          style={{ originX: 0, originY: 0, x: 138 }}
          initial="hidden"
          whileInView="visible"
          // viewport={{ once: true }}
        >
          {socNets.map(({ text, src }, i) => {
            return (
              <li
                key={i}
                className={
                  i === 0
                    ? `${styles.socNetItem} ${styles.itemDecor}`
                    : `${styles.socNetItem}`
                }
              >
                <motion.a
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className={styles.socNetLink}
                  style={{ originX: 0, originY: 0.5 }}
                  variants={socLink}
                  whileHover="hover"
                  whileFocus="hover"
                  whileTap="tap"
                >
                  {text}
                </motion.a>
              </li>
            );
          })}
        </motion.ul>
      </aside>
    </Section>
  );
};

export default Banner;
