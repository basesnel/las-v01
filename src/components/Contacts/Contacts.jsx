import Section from "../Section/Section";
import Heading from "../Heading/Heading";
import Subtitle from "../Subtitle/Subtitle";
import Link from "../Link/Link";
import Icon from "../Icon/Icon";
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
        <Subtitle>working hours</Subtitle>
        <p>Monday-Saturday from 9:00 to 18:00</p>
      </aside>
    </Section>
  );
};

export default Contacts;
