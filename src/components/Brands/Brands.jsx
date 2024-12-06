import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Section from "../Section/Section";
import Subtitle from "../Subtitle/Subtitle";
import Heading from "../Heading/Heading";
import brands from "../../constants/brands";

import icons from "../../assets/icons.svg";

import styles from "./styles.module.css";

import { brandItem, brandLink, switchStat } from "./variants";

const Brands = () => {
  const { title, subTitle, carBrands } = brands;

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "all", once: true });

  return (
    <Section indexSection={8}>
      <Subtitle>{subTitle.uk}</Subtitle>
      <Heading level={2} title={title.uk} />
      <ul ref={ref} className={styles.list}>
        {carBrands.map(({ icon, label }, i) => (
          <motion.li
            key={i}
            className={styles.item}
            variants={brandItem}
            initial={switchStat(i)}
            animate={isInView && "visible"}
            transition={{
              delay: i * 0.2,
              type: "spring",
              stiffness: 300,
            }}
            viewport={{ once: true }}
          >
            {/* <Brand icon={icon} label={label} /> */}
            <motion.a
              href="#"
              aria-label={label.uk}
              className={styles.link}
              variants={brandLink}
              initial="initial"
              whileHover="hover"
              whileFocus="hover"
              whileTap="tap"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={120}
                height={90}
                focusable="false"
                aria-hidden={true}
                className={styles.icon}
              >
                <use href={`${icons}#${icon}`}></use>
              </svg>
            </motion.a>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
};

// const Brand = ({ icon, label }) => {
//   return (
//     <motion.a
//       href="#"
//       aria-label={label.uk}
//       className={styles.link}
//       variants={brandLink}
//       initial="initial"
//       whileHover="hover"
//       whileFocus="hover"
//       whileTap="tap"
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width={120}
//         height={90}
//         focusable="false"
//         aria-hidden={true}
//         className={styles.icon}
//       >
//         <use href={`${icons}#${icon}`}></use>
//       </svg>
//     </motion.a>
//   );
// };

export default Brands;
