import Section from "../Section/Section";
import Subtitle from "../Subtitle/Subtitle";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";
import Data from "../Data/Data";
import Link from "../Link/Link";
import socNets from "../../constants/socials";

import Slider from "../Slider/Slider";
import banner from "../../constants/banner";

import styles from "./styles.module.css";
import Reference from "../Reference/Reference";

const Banner = () => {
  const { subTitle, text, link, data } = banner;

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
        <ul className={styles.socNetList}>
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
                <Link src={src} className={styles.socNetLink}>
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </Section>
  );
};

export default Banner;
