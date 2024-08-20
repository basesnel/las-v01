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
        Our company provides a full range of services for the maintenance and
        repair of cars of well-known brands and models.
      </Text>
      <Text mode="intro">
        A team of professionals is ready to help you not only with the
        maintenance and repair of your car, but also provide painting and
        detailing services.
      </Text>
      <Text mode="intro">
        We pay special attention to the quality and speed of our services, so
        you can be sure that your car will be in good hands.
      </Text>
    </Section>
  );
};

export default Gallery;
