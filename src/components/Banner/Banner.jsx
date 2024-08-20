import formatDate from "../../helpers/formatDate";
import Section from "../Section/Section";
import Subtitle from "../Subtitle/Subtitle";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";
import Data from "../Data/Data";

// import styles from "./styles.module.css";

const Banner = () => {
  return (
    <Section
      part="banner"
      variant="dark"
      mode="banner"
      label="banner with news"
    >
      <Subtitle>a quality car service in poltava</Subtitle>
      <Heading level={1} title="liashenko auto service" />
      <Text mode="banner">
        Services for cars. We invite you to visit LAS, where you can get a full
        range of quality services, namely:
      </Text>
      <Data mode="banner">Auto-tool | {formatDate(new Date())}</Data>
    </Section>
  );
};

export default Banner;
