import { motion } from "framer-motion";
import Section from "../Section/Section";
import Heading from "../Heading/Heading";
import Subtitle from "../Subtitle/Subtitle";
import Text from "../Text/Text";
import features from "../../constants/features";

import useSmallMobile from "../../hooks/useSmallMobile";

import { featureItem, statItem, switchStat } from "./variants";

import styles from "./styles.module.css";

const Features = () => {
  const {
    subTitle,
    title,
    preText,
    firstText,
    secondText,
    thirdText,
    list,
    stats,
  } = features;

  const isSmallMobile = useSmallMobile();

  return (
    <Section indexSection={3} containerVariant="features">
      <div className={styles.content}>
        <Subtitle>{subTitle.uk}</Subtitle>
        <Heading level={2} mode="features" title={title.uk} />
        <Text mode="introWelcome">{preText.uk}</Text>
        <Text mode="intro">{firstText.uk}</Text>
        <ul className={styles.featuresList}>
          {list.map(({ uk }, i) => (
            <motion.li
              key={i}
              className={styles.featuresItem}
              variants={featureItem}
              style={
                i % 2
                  ? { originX: 1, originY: 0.5 }
                  : { originX: 0, originY: 0.5 }
              }
              initial="hidden"
              whileInView="visible"
              transition={{
                type: "tween",
                duration: 0.5,
                delay: i * 0.4,
              }}
              viewport={{ once: true }}
            >
              {uk}
            </motion.li>
          ))}
        </ul>
        <Text mode="intro">{secondText.uk}</Text>
        <Text mode="intro">{thirdText.uk}</Text>
      </div>
      <ul className={styles.list}>
        {stats.map(({ amount, text }, i) => {
          return (
            <motion.li
              key={i}
              className={styles.item}
              variants={statItem}
              initial={switchStat(i)}
              whileInView={
                i % 2
                  ? "evenVisible"
                  : isSmallMobile
                  ? "evenVisible"
                  : "oddVisible"
              }
              transition={{
                delay: i * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
            >
              <div className={styles.benefit}>
                <p className={styles.amount}>{amount}</p>
                <p className={styles.feature}>{text.uk}</p>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Features;
