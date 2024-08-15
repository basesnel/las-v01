import Section from "../Section/Section";
import Heading from "../Heading/Heading";
import Subtitle from "../Subtitle/Subtitle";
import Icon from "../Icon/Icon";

import styles from "./styles.module.css";
import contacts from "../../constants/contacts";

const Contacts = () => {
  const isLinkExternal = (par) => par.toLowerCase().match(/^https/);

  return (
    <Section part="contacts" variant="dark">
      <Heading level={2} title="contacts" />
      <address className={styles.address}>
        <ul>
          {contacts.map(({ id, text, src, icon }) => {
            return (
              <li key={id} className={styles.item}>
                <a
                  className={styles.link}
                  href={src}
                  {...(isLinkExternal(src) && {
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                  })}
                >
                  <Icon
                    icon={icon}
                    width={24}
                    height={24}
                    className={styles.icon}
                  />
                  <span className={styles.text}>{text}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </address>
      <Subtitle>working hours</Subtitle>
      <p>Monday-Saturday from 9:00 to 18:00</p>
    </Section>
  );
};

export default Contacts;
