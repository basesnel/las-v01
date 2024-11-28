import { motion } from "framer-motion";
import Section from "../Section/Section";
import Heading from "../Heading/Heading";
import Subtitle from "../Subtitle/Subtitle";
import Text from "../Text/Text";
import features from "../../constants/features";

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

  const statItem = {
    hiddenFirst: { scale: 0.5, opacity: 0, x: -50, y: -50 },
    hiddenSecond: { scale: 0.5, opacity: 0, x: 50, y: -50 },
    hiddenThird: { scale: 0.5, opacity: 0, x: 50, y: 50 },
    hiddenFourth: { scale: 0.5, opacity: 0, x: -50, y: 50 },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  const switchStat = (i) => {
    switch (i % 4) {
      case 0:
        return "hiddenFirst";

      case 1:
        return "hiddenSecond";

      case 2:
        return "hiddenThird";

      case 3:
        return "hiddenFourth";

      default:
        return;
    }
  };

  return (
    <Section indexSection={3} containerVariant="features">
      <div className={styles.content}>
        <Subtitle>{subTitle.uk}</Subtitle>
        <Heading level={2} mode="features" title={title.uk} />
        <Text mode="introWelcome">{preText.uk}</Text>
        <Text mode="intro">{firstText.uk}</Text>
        <ul className={styles.featuresList}>
          {list.map(({ uk }, i) => (
            <li key={i} className={styles.featuresItem}>
              {uk}
            </li>
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
              whileInView="visible"
              transition={{
                delay: i * 0.5,
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
