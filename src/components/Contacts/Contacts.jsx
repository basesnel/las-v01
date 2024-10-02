import Section from "../Section/Section";
import Heading from "../Heading/Heading";
import Subtitle from "../Subtitle/Subtitle";
import Link from "../Link/Link";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import contacts from "../../constants/contacts";

import styles from "./styles.module.css";

const Contacts = () => {
  return (
    <Section colorMode="dark" containerVariant="contacts">
      <div className={styles.content}>
        <Heading level={3} title="contacts" />
        <address className={styles.address}>
          <ul>
            {contacts.map(({ id, text, src, icon }) => {
              if (id < 6)
                return (
                  <li key={id} className={styles.item}>
                    <Link src={src} className={styles.link}>
                      <Icon
                        icon={icon}
                        width={24}
                        height={24}
                        className={styles.icon}
                      />
                      <span className={styles.text}>{text}</span>
                    </Link>
                  </li>
                );
            })}
          </ul>
        </address>
      </div>
      <aside className={styles.aside}>
        <Subtitle mode="contacts">working hours</Subtitle>
        <Text variant="contacts">Monday-Saturday from 9:00 to 18:00</Text>
        <Subtitle mode="contacts">we are on socials</Subtitle>
        <ul>
          {contacts.map(({ id, text, src, icon }) => {
            if (id >= 6)
              return (
                <li key={id} className={styles.item}>
                  <Link src={src} className={styles.link}>
                    <Icon
                      icon={icon}
                      width={24}
                      height={24}
                      className={styles.icon}
                    />
                    <span className={styles.text}>{text}</span>
                  </Link>
                </li>
              );
          })}
        </ul>
      </aside>
    </Section>
  );
};

export default Contacts;
