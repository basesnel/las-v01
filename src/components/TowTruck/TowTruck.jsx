import { useState } from "react";
import Section from "../Section/Section";
import Subtitle from "../Subtitle/Subtitle";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";
import Reference from "../Reference/Reference";
import List from "./List";
import Screen from "./Screen";
import Filmstrip from "./Filmstrip";

import towtruck from "../../constants/towtruck";

import styles from "./styles.module.css";

const TowTruck = () => {
  const {
    subTitle,
    title,
    preText,
    firstText,
    transports,
    secondText,
    suggests,
    link,
    images,
    frames,
  } = towtruck;

  const [index, setIndex] = useState(1);

  return (
    <Section indexSection={3} containerVariant="towtruck">
      <div className={styles.content}>
        <Subtitle>{subTitle.uk}</Subtitle>
        <Heading level={2} mode="intro" title={title.uk} />
        <Text mode="towtruckWelcome">{preText.uk}</Text>
        <Text mode="towtruck">{firstText.uk}</Text>
        <List list={transports} />
        <Text mode="towtruck">{secondText.uk}</Text>
        <List list={suggests} />
        <Reference src={link.src} caption={link.text.uk} />
      </div>
      <aside className={styles.aside}>
        <Screen images={images} index={index} />
        <Filmstrip frames={frames} getIndex={setIndex} />
      </aside>
    </Section>
  );
};

export default TowTruck;
