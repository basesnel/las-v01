import Section from "../Section/Section";
import Heading from "../Heading/Heading";
import Subtitle from "../Subtitle/Subtitle";
// import Link from "../Link/Link";
// import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import contacts from "../../constants/contacts";

import icons from "../../assets/icons.svg";

import styles from "./styles.module.css";

const Contacts = () => {
  const { title, list, subtitle1, text } = contacts;

  return (
    <Section
      colorMode="dark"
      sectionVariant="contacts"
      containerVariant="contacts"
    >
      <div className={styles.content}>
        <Heading level={3} title={title.uk} />
        <address className={styles.address}>
          <ul>
            {list.map(({ id, text, src, icon }) => {
              if (id < 4)
                return (
                  <li key={id} className={styles.item}>
                    <a
                      href={src}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className={styles.link}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        focusable="false"
                        aria-hidden={true}
                        className={styles.icon}
                      >
                        <use href={`${icons}#${icon}`}></use>
                      </svg>
                      <span className={styles.text}>{text.uk}</span>
                    </a>
                  </li>
                );
            })}
          </ul>
        </address>
      </div>
      <aside className={styles.aside}>
        <Subtitle mode="contacts">{subtitle1.uk}</Subtitle>
        <Text variant="contacts">{text.uk}</Text>
        {/* <Subtitle mode="contacts">{subtitle2.uk}</Subtitle>
        <ul>
          {list.map(({ id, text, src, icon }) => {
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
                    <span className={styles.text}>{text.uk}</span>
                  </Link>
                </li>
              );
          })}
        </ul> */}
      </aside>
    </Section>
  );
};

export default Contacts;
