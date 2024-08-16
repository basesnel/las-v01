import Link from "../Link/Link";
import socNets from "../../constants/socials";

import styles from "./styles.module.css";

const Socnets = ({ variant }) => {
  const variation = variant ? `${styles[variant]}` : "";

  return (
    <ul className={`${styles.list} ${variation}`}>
      {socNets.map(({ id, text, src }) => {
        return (
          <li
            key={id}
            className={
              id === 0
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
