import Section from "../Section/Section";
import Subtitle from "../Subtitle/Subtitle";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";
import Data from "../Data/Data";
import Socnets from "../Socnets/Socnets";
import Slider from "../Slider/Slider";
import banner from "../../constants/banner";

import styles from "./styles.module.css";
import Reference from "../Reference/Reference";

const Banner = () => {
  const { subTitle, text, data } = banner;

  return (
    <Section indexSection={0} sectionVariant="banner" containerVariant="banner">
      <div className={styles.content}>
        <Subtitle mode="banner">{subTitle.uk}</Subtitle>
        <Heading level={1} title="liashenko auto service" />
        <Text mode="banner">{text.uk}</Text>
        <Reference
          src="#services"
          caption="До послуг"
          mode="light"
          part="banner"
        />
        <Data mode="banner">{data.uk}</Data>
        <Slider />
      </div>
      <aside className={styles.aside}>
        <Socnets variant="aside" />
      </aside>
    </Section>
  );
};

export default Banner;
