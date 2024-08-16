import Section from "../Section/Section";
import Heading from "../Heading/Heading";
import Subtitle from "../Subtitle/Subtitle";
import Link from "../Link/Link";
import Icon from "../Icon/Icon";
import mechanics from "../../constants/mechanics";

import styles from "./styles.module.css";

const Automechanics = () => {
  return (
    <Section part="automechanics" variant="highlight" label="our mechanics">
      <Subtitle>true blacksmith of their craft</Subtitle>
      <Heading level={2} title="our mechanics" />
      <ul>
        {mechanics.map(({ id, name, position, socnet }) => {
          return (
            <li key={id} className={styles.item}>
              <div className={styles.card}>
                <div className={styles.thumb}></div>
                <div className={styles.content}>
                  <h3 className={styles.name}>{name}</h3>
                  <p className={styles.text}>{position}</p>
                  <ul className={styles.socials}>
                    <li>
                      <Link src={socnet.instagram} className={styles.link}>
                        <Icon
                          icon="icon-instagram"
                          width={20}
                          height={20}
                          className={styles.icon}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link src={socnet.instagram} className={styles.link}>
                        <Icon
                          icon="icon-twitter"
                          width={20}
                          height={20}
                          className={styles.icon}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link src={socnet.instagram} className={styles.link}>
                        <Icon
                          icon="icon-facebook"
                          width={20}
                          height={20}
                          className={styles.icon}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link src={socnet.instagram} className={styles.link}>
                        <Icon
                          icon="icon-linkedin"
                          width={20}
                          height={20}
                          className={styles.icon}
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Automechanics;
