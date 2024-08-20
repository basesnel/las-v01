import Section from "../Section/Section";
import Subtitle from "../Subtitle/Subtitle";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";

// import styles from "./styles.module.css";

const Gallery = () => {
  return (
    <Section part="introduction" label="invitation">
      <Subtitle>about</Subtitle>
      <Heading level={2} title="introductions" />
      <Text>Welcome and introductions.</Text>
      <Text mode="intro">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
    </Section>
  );
};

export default Gallery;
