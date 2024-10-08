import Link from "../Link/Link";
import socNets from "../../constants/socials";

import styles from "./styles.module.css";

const Socnets = ({ variant }) => {
  const variation = variant ? `${styles[variant]}` : "";

  return (
    <ul className={`${styles.list} ${variation}`}>
      {socNets.map(({ text, src }, i) => {
        return (
          <li
            key={i}
            className={
              i === 0
                ? `${styles.item} ${styles.itemDecor} ${variation}`
                : `${styles.item} ${variation}`
            }
          >
            <Link src={src} className={styles.link}>
              {text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Socnets;
