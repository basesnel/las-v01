import formatDate from "../../helpers/formatDate";
import Section from "../Section/Section";
import Subtitle from "../Subtitle/Subtitle";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";
import Data from "../Data/Data";
import Socnets from "../Socnets/Socnets";
import Slider from "../Slider/Slider";
import sections from "../../constants/sections";

import styles from "./styles.module.css";

const Banner = () => {
  return (
    <Section part={sections[0].id} mode="banner" label={sections[0].uk}>
      <div className={styles.content}>
        <Subtitle mode="banner">a quality car service in poltava</Subtitle>
        <Heading level={1} title="liashenko auto service" />
        <Text mode="banner">
          Services for cars. We invite you to visit LAS, where you can get a
          full range of quality services, namely:
        </Text>
        <Data mode="banner">Auto-tool | {formatDate(new Date())}</Data>
        <Slider />
      </div>
      <aside className={styles.aside}>
        <Socnets variant="aside" />
      </aside>
    </Section>
  );
};

export default Banner;
