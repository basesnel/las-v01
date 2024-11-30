import { motion } from "framer-motion";
import Section from "../Section/Section";
import Subtitle from "../Subtitle/Subtitle";
import Heading from "../Heading/Heading";
import brands from "../../constants/brands";

import icons from "../../assets/icons.svg";

import styles from "./styles.module.css";

const brandList = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

const brandItem = {
  hiddenFirst: { scale: 0, opacity: 0, x: -50, y: -50 },
  hiddenSecond: { scale: 0, opacity: 0, x: 50, y: -50 },
  hiddenThird: { scale: 0, opacity: 0, x: -50, y: 50 },
  hiddenFourth: { scale: 0, opacity: 0, x: 50, y: 50 },
  visible: { opacity: 1, scale: 1, x: 0, y: 0 },
};

const brandLink = {
  initial: {
    scale: 1,
    rotate: 0,
  },
  hover: {
    scale: [1, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2],
    rotate: [0, 0, -13, 8, -5, 3, -2, 1, 0],
    transition: {
      duration: 0.5,
      times: [0, 0.3, 0.4, 0.64, 0.8, 0.89, 0.95, 0.99, 1],
    },
  },
  tap: {
    scale: 0.8,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

const switchStat = (i) => {
  switch (i % 4) {
    case 0:
      return "hiddenFirst";

    case 1:
      return "hiddenSecond";

    case 2:
      return "hiddenThird";

    case 3:
      return "hiddenFourth";

    default:
      return;
  }
};

const Brands = () => {
  const { title, subTitle, carBrands } = brands;

  return (
    <Section indexSection={8}>
      <Subtitle>{subTitle.uk}</Subtitle>
      <Heading level={2} title={title.uk} />
      <motion.ul
        className={styles.list}
        variants={brandList}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {carBrands.map(({ icon, label }, i) => (
          <motion.li
            key={i}
            className={styles.item}
            variants={brandItem}
            initial={switchStat(i)}
            whileInView="visible"
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
      </motion.ul>
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
