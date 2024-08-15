import formatDate from "../../helpers/formatDate";
import Section from "../Section/Section";
import Subtitle from "../Subtitle/Subtitle";
import Heading from "../Heading/Heading";
import Image from "../Image/Image";

import styles from "./styles.module.css";

const Banner = () => {
  return (
    <Section part="banner" variant="dark">
      <Subtitle>a quality car service in poltava</Subtitle>
      <Heading level={1} title="liashenko auto service" />
      <p className={styles.date}>Some content</p>
      <p className={styles.date}>Auto-tool | {formatDate(new Date())}</p>
      <Image />
    </Section>
  );
};

export default Banner;
