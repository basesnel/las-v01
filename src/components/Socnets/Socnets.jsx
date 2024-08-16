import Link from "../Link/Link";
import socNets from "../../constants/socials";

import styles from "./styles.module.css";

const Socnets = () => {
  return (
    <ul className={styles.list}>
      {socNets.map(({ id, text, src }) => {
        return (
          <li
            key={id}
            className={
              id === 0 ? `${styles.item} ${styles.itemDecor}` : `${styles.item}`
            }
          >
            <Link
              src={src}
              target="_blank"
              rel="noreferrer noopener nofollow"
              className={styles.link}
            >
              {text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Socnets;
