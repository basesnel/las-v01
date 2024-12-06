import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Section from "../Section/Section";
import Heading from "../Heading/Heading";
import Subtitle from "../Subtitle/Subtitle";
import Text from "../Text/Text";
import features from "../../constants/features";

import useSmallMobile from "../../hooks/useSmallMobile";

import { featureItem, statItem, switchStat } from "./variants";

import styles from "./styles.module.css";

const Features = () => {
  const { subTitle, title, preText, firstText, secondText, thirdText } =
    features;

  return (
    <Section indexSection={3} containerVariant="features">
      <div className={styles.content}>
        <Subtitle>{subTitle.uk}</Subtitle>
        <Heading level={2} mode="features" title={title.uk} />
        <Text mode="introWelcome">{preText.uk}</Text>
        <Text mode="intro">{firstText.uk}</Text>
        <List />
        <Text mode="intro">{secondText.uk}</Text>
        <Text mode="intro">{thirdText.uk}</Text>
      </div>
      <Stats />
    </Section>
  );
};

const List = () => {
  const { list } = features;

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.8, once: true });

  return (
    <ul ref={ref} className={styles.featuresList}>
      {list.map(({ uk }, i) => (
        <motion.li
          key={i}
          className={styles.featuresItem}
          variants={featureItem}
          style={
            i % 2 ? { originX: 1, originY: 0.5 } : { originX: 0, originY: 0.5 }
          }
          initial="hidden"
          animate={isInView && "visible"}
          transition={{
            type: "tween",
            duration: 0.5,
            delay: 0.4,
          }}
        >
          {uk}
        </motion.li>
      ))}
    </ul>
  );
};

const Stats = () => {
  const { stats } = features;

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.8, once: true });

  const isSmallMobile = useSmallMobile();

  return (
    <ul ref={ref} className={styles.list}>
      {stats.map(({ amount, text }, i) => {
        return (
          <motion.li
            key={i}
            className={styles.item}
            variants={statItem}
            style={switchStat(i)}
            initial="hidden"
            animate={
              isInView &&
              `${
                i % 2
                  ? "evenVisible"
                  : isSmallMobile
                  ? "evenVisible"
                  : "oddVisible"
              }`
            }
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.4,
            }}
          >
            <div className={styles.benefit}>
              <p className={styles.amount}>{amount}</p>
              <p className={styles.feature}>{text.uk}</p>
            </div>
          </motion.li>
        );
      })}
    </ul>
  );
};

export default Features;
