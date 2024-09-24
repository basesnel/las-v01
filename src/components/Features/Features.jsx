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

  return (
    <Section indexSection={3}>
      <Subtitle>{subTitle.uk}</Subtitle>
      <Heading level={2} title={title.uk} />
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
      <ul className={styles.list}>
        {stats.map(({ amount, text }, i) => {
          return (
            <li key={i} className={styles.item}>
              <div className={styles.benefit}>
                <p className={styles.amount}>{amount}</p>
                <p className={styles.feature}>{text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Features;
