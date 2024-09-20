import Section from "../Section/Section";
import Heading from "../Heading/Heading";
import Subtitle from "../Subtitle/Subtitle";
import Link from "../Link/Link";
import Icon from "../Icon/Icon";
import mechanics from "../../constants/mechanics";

import styles from "./styles.module.css";

const Automechanics = () => {
  return (
    <Section indexSection={5} colorMode="highlight">
      <Subtitle>true blacksmith of their craft</Subtitle>
      <Heading level={2} title="our mechanics" />
      <ul>
        {mechanics.map(({ name, position, socnets }, i) => {
          return (
            <li key={i} className={styles.item}>
              <div className={styles.card}>
                <div className={styles.thumb}></div>
                <div className={styles.content}>
                  <h3 className={styles.name}>{name}</h3>
                  <p className={styles.text}>{position}</p>
                  <ul className={styles.socials}>
                    {socnets.map(({ icon, socnet }, j) => (
                      <li key={j}>
                        <Link src={socnet} className={styles.link}>
                          <Icon
                            icon={icon}
                            width={20}
                            height={20}
                            className={styles.icon}
                          />
                        </Link>
                      </li>
                    ))}
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
