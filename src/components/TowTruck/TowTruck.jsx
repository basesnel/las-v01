import { useState } from "react";
import Section from "../Section/Section";
import Subtitle from "../Subtitle/Subtitle";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";
import Reference from "../Reference/Reference";
import List from "./List";
import Screen from "./Screen";
import Filmstrip from "./Filmstrip";

import towtruck from "../../constants/towtruck";

import styles from "./styles.module.css";

const spring = {
  type: "spring",
  dumping: 20,
  stiffness: 100,
};

const TowTruck = () => {
  const {
    subTitle,
    title,
    preText,
    firstText,
    transports,
    secondText,
    suggests,
    link,
    images,
    frames,
  } = towtruck;

  const [index, setIndex] = useState(1);

  return (
    <Section indexSection={3} containerVariant="towtruck">
      <div className={styles.content}>
        <Subtitle>{subTitle.uk}</Subtitle>
        <Heading level={2} mode="intro" title={title.uk} />
        <Text mode="towtruckWelcome">{preText.uk}</Text>
        <Text mode="towtruck">{firstText.uk}</Text>
        <List list={transports} />
        <Text mode="towtruck">{secondText.uk}</Text>
        <List list={suggests} />
        <Reference src={link.src} caption={link.text.uk} />
      </div>
      <aside className={styles.aside}>
        <Screen images={images} index={index} />
        <Filmstrip frames={frames} getIndex={setIndex} />
      </aside>
    </Section>
  );
};

// const List = ({ list }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { amount: 0.8, once: true });

//   const transportItem = {
//     hidden: { scale: 0, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//     },
//   };

//   return (
//     <ul ref={ref} className={styles.list}>
//       {list.map(({ uk }, i) => {
//         return (
//           <motion.li
//             key={i}
//             className={styles.item}
//             variants={transportItem}
//             style={
//               i % 2
//                 ? { originX: 1, originY: 0.5 }
//                 : { originX: 0, originY: 0.5 }
//             }
//             initial="hidden"
//             animate={isInView && "visible"}
//             transition={{
//               type: "tween",
//               duration: 0.5,
//               delay: 0.4,
//             }}
//           >
//             {uk}
//           </motion.li>
//         );
//       })}
//     </ul>
//   );
// };

export default TowTruck;
